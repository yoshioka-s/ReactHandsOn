import React, { useState } from 'react'
import _ from 'lodash'
import { FaMars, FaVenus } from 'react-icons/fa'
import './App.module.css'

function App() {
  const [lastName, setLastname] = useState('')
  const [firstName, setFirstname] = useState('')
  const [gender, setGender] = useState(0)

  function changeLastName(e) {
    setLastname(e.target.value)
  }
  function changeFirstName(e) {
    setFirstname(e.target.value)
  }
  function changegender(value) {
    setGender(value)
  }
  const genderOptions = [
    { value: 0, label: '男' },
    { value: 1, label: '女' },
  ]

  const [members, setMembers] = useState([])
  function addMember(e) {
    e.preventDefault()
    const newMember = { firstName, lastName, gender }
    setMembers([...members, newMember])
    setLastname('')
    setFirstname('')
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
          <ul>
            {boys.map((member, i) => (
                <li key={i}>
                  <FaMars className="male" />
                  {member.name}
                </li>
              )
            )}
          </ul>
          <ul>
            {girls.map((member, i) => {
              return (
                <li key={i}>
                  <FaVenus className="female" />
                  {member.name}
                </li>
              )
            })}
          </ul>
          <button onClick={shuffle} className="btn btn-success">
            席替え
          </button>
        </div>
        <form onSubmit={addMember} className="member-form form">
          <div className="form-group">
            <label>
              姓
              <input type="text" value={lastName} onChange={changeLastName} />
            </label>
          </div>
          <div className="form-group">
            <label>
              名
              <input type="text" value={firstName} onChange={changeFirstName} />
            </label>
          </div>
          <div className="form-group">
            {genderOptions.map((option) => (
              <label key={option.value}>
                {option.label}
                <input
                  type="radio"
                  value={option.value}
                  onChange={() => changegender(option.value)}
                  checked={gender === option.value}
                />
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
