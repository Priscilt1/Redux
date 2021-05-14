//estado global do redux
import { createStore } from 'redux'
import rootReduce from './modules/rootReduce'
import { ICartState } from './modules/cart/types'

export interface IState {
  cart: ICartState
}

const store = createStore(rootReduce) //valor inicial do store

export default store