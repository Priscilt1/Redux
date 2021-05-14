//o reduce determina quais informações estão contidas dentro do modulo
//retorna os dadoscontidos dentro do estado
import { Reducer } from 'redux'
import { ICartState } from './types'

const INITTIAL_STATE: ICartState = { 
  items: []
}

const cart: Reducer<ICartState> = (state, action) => {
  console.log(state, action)
  return INITTIAL_STATE
}

export default cart