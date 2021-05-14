//configuração do card - saga
import { all, takeLatest } from 'redux-saga/effects'

function checkProductStock() {
  console.log('Adicionar ao carrinho')
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock ) //passando qual ação e qual função
])