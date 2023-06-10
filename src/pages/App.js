import { useState } from 'react';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import {api} from '../services/api'
import * as C from './styles'

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])
  //IsraelAlvesN/gerenciador-de-despesas
  const handleSearchRepo = async () => {
    const {data} = await api.get(`/repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Invalid repo')
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <C.Container>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" 
        alt="Logo Github"
        width={72}
        height={72}
        />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}
    </C.Container>
  );
}

export default App;
