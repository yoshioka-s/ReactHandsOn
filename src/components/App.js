import React, { useState } from 'react'
import _ from 'lodash'
import './App.module.css'
import MemberList from './MemberList'
import MemberForm from './MemberForm'

function App() {
  const [members, setMembers] = useState([])
  function addMember({ lastName, firstName, gender }) {
    const newMember = { firstName, lastName, gender }
    setMembers([...members, newMember])
  }

  function shuffle() {
    const shuffledMembers = _.shuffle(members)
    setMembers(shuffledMembers)
  }

  const boys = _.filter(members, { gender: 0 })
  const girls = _.filter(members, { gender: 1 })

  return (
    <div className="app">
      <h1>席替え番長</h1>
      <div className="wrapper">
        <div className="members">
          <MemberList members={boys} />
          <MemberList members={girls} />
          <button onClick={shuffle} className="btn btn-success">
            席替え
          </button>
        </div>
        <MemberForm addMember={addMember} />
      </div>
    </div>
  )
}

export default App
