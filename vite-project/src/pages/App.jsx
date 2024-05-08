/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import gitlogo from '../assets/github.png'
import {Container} from './styles'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import Button from '../components/Button'
import {api} from '../services/api'
function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async() => {
    const {data} = await api.get(`repos/${currentRepo}`)

    try{

      const exist = repos.find(repo => repo.id === data.id)

      if(!exist){
          setRepos(prev => [...prev, data])
          setCurrentRepo('')
          console.log(repos)
          return
        }

    }catch(err){
      throw('Repositório não encontrado')
    }
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => (
        <ItemRepo repo={repo} id={repo.id}/>
      ))}
    </Container>
  )
}

export default App
