import { useSelector } from "react-redux"

const Cart: React.FC = () => {
  const state = useSelector(state => state)
  
  console.log(state)
  
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  )
}

export default Cart