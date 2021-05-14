import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

export default function* rootSaga(): any {
  return yield all([
    cart,
  ])
}

// function* significa um generetion(*), que é mais ou menos uma funcao assicrona. Quando coloca o * é a mesma coisa de colocar um async