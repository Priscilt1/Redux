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
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload

          draft.items.push({ //atualizando o carrinho
            product,
            quantity: 1,
          }) 

        break
      }
      default: {
        return draft
      }
    }
  })
}

export default cart