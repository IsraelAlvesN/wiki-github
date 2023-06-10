import React from 'react'
import * as C from './styles'

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <C.ItemRepoContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver repositório</a><br />
        <a href='#' rel='noreferrer' className='remove' onClick={handleRemove}>Remover</a>
        <hr/>
    </C.ItemRepoContainer>
  )
}

export default ItemRepo