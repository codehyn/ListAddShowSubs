import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header'
import List from './components/List';
import Form from './components/Form'
import {Sub} from './types'


interface AppState {
  subs : Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE =[
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'dapelu is very cool'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSub = (newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
  }

  return (
    <>
    <Header />
      <div className="App" ref={divRef}>
      <Form onNewSub={handleNewSub} />
      <List subs={subs} />
      </div>
    </>
  );
}

export default App;
