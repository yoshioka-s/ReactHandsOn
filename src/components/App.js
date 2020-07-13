import React, { useState } from 'react'
import _ from 'lodash'
import './App.module.css'
import { useInput } from '../hooks'
import MemberList from './MemberList'

function App() {
  const [lastNameProps, resetLastname] = useInput('')
  const [firstNameProps, resetFirstname] = useInput('')
  const [gender, setGender] = useState(0)

  function changegender(value) {
    setGender(value)
  }
  const genderOptions = [
    { value: 0, label: '男' },
    { value: 1, label: '女' }
  ]

  const [members, setMembers] = useState([])
  function addMember(e) {
    e.preventDefault()
    const newMember = { firstName: firstNameProps.value, lastName: lastNameProps.value, gender }
    setMembers([...members, newMember])
    resetLastname()
    resetFirstname()
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
        <form onSubmit={addMember} className="member-form form">
          <div className="form-group">
            <label>
              姓
              <input type="text" {...lastNameProps} />
            </label>
          </div>
          <div className="form-group">
            <label>
              名
              <input type="text" {...firstNameProps} />
            </label>
          </div>
          <div className="form-group">
            {genderOptions.map(option => (
              <label key={option.value}>
                {option.label}
                <input type="radio" value={option.value} onChange={() => changegender(option.value)} checked={gender === option.value} />
              </label>
            ))}
          </div>
          <button type="submit" className="btn btn-primary">
            追加
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
