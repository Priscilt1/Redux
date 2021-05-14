//configuração do card - saga
import { all, takeLatest, select } from 'redux-saga/effects'
import { IState } from '../..'
import { addProductToCart } from './actions'

type CheckProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock({ payload }: CheckProductStockRequest) {
  //checar qual a quantidade de estoque que eu ja tenho no carrinho
  const { product } = payload
  const currentQuantity: number = yield select((state: IState) => {
    //procurando se o produto ja esta no carrinho
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0 //se nao achar o produto, o seu valor padrao sera 0
  })

  console.log(currentQuantity)
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock ) //passando qual ação e qual função
])