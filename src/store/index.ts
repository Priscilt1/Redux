//estado global do redux
import { createStore } from 'redux'
import rootReduce from './modules/rootReduce'

const store = createStore(rootReduce) //valor inicial do store

export default store