/* eslint-disable no-unused-vars */
import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo}) => {

    const [array, setArray] = React.useState([])

    React.useEffect(() => {
        setArray(prevArray => [...prevArray, repo.id])
    }, [repo])

    const handleRemove = () => {  
      const findIndex = array.findIndex(id => id === repo.id);
      if(findIndex !== -1) {
          const newArray = [...array];
          newArray.splice(findIndex, 1);
          setArray(newArray);
      }
  }

    console.log(array)
    return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noferrer" target='_blank'>Ver repositório</a><br />
        <a href="#" className="remover" onClick={handleRemove()}>remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo