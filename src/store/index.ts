//estado global do redux
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReduce'

import { ICartState } from './modules/cart/types'
import rootSaga from './modules/rootSaga'

export interface IState {
  cart: ICartState
}

//configuração do saga
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools( //funcao para debugar
    applyMiddleware(...middlewares)
  ) 
) //valor inicial do store

sagaMiddleware.run(rootSaga)

export default store