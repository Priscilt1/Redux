//o reduce determina quais informações estão contidas dentro do modulo
//retorna os dadoscontidos dentro do estado
import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, ICartState } from './types'

const INITTIAL_STATE: ICartState = { 
  items: [],
  failedStockCheck: []
}

const cart: Reducer<ICartState> = (state = INITTIAL_STATE, action) => {
  return produce(state, draft => { //draft - rascunho
  switch(action.type) {
      case ActionTypes.addProductToCartSuccess: { //pq so quero adicionar o produto no carrinho quando passar
        const { product } = action.payload

        //para saber se o produto ja esta no carrinho antes de adicionar
        const productInCartIndex = draft.items.findIndex(item => 
          item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++
        } else {
          draft.items.push({ //atualizando o carrinho
            product,
            quantity: 1,
          }) 
        }
        
        break
      }
      case ActionTypes.addProductToCartFailure: { //ouvindo a acao de falha
        draft.failedStockCheck.push(action.payload.productId)

        break
      }
      default: {
        return draft
      }
    }
  })
}

export default cart