import { useSelector, useStore } from "react-redux"

const Catalog: React.FC = () => {
  const catalog = useSelector(state => state) //retornando o estado

  return (
    <h1>Ruguinho</h1>
  )
}

export default Catalog