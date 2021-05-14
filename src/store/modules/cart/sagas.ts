//configuração do card - saga
import { AxiosResponse } from 'axios'
import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { IState } from '../..'
import api from '../../../services/api'
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
import { ActionTypes } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
  id: number
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  //checar qual a quantidade de estoque que eu ja tenho no carrinho
  const { product } = payload
  const currentQuantity: number = yield select((state: IState) => {
    //procurando se o produto ja esta no carrinho
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0 //se nao achar o produto, o seu valor padrao sera 0
  })

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`) //fazendo uma busca

  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))

  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock ) //passando qual ação e qual função
])