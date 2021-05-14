//estado global do redux
import { createStore } from 'redux'
import rootReduce from './modules/rootReduce'
import { ICartState } from './modules/cart/types'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface IState {
  cart: ICartState
}

const store = createStore(
  rootReduce,
  composeWithDevTools() //funcao para debugar
) //valor inicial do store

export default store