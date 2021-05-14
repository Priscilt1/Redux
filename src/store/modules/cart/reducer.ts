//o reduce determina quais informações estão contidas dentro do modulo
//retorna os dadoscontidos dentro do estado
import { Reducer } from 'redux'
import produce from 'immer'
import { ICartState } from './types'

const INITTIAL_STATE: ICartState = { 
  items: []
}

const cart: Reducer<ICartState> = (state = INITTIAL_STATE, action) => {
  return produce(state, draft => { //draft - rascunho
  switch(action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS': { //pq so quero adicionar o produto no carrinho quando passar
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
      case 'ADD_PRODUCT_TO_CART_FAILURE': { //ouvindo a acao de falha
        console.log('failure', action.payload)

        break
      }
      default: {
        return draft
      }
    }
  })
}

export default cart