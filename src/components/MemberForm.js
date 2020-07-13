import React, { useState } from 'react'
import { useInput } from '../hooks'

function MemberForm({ addMember }) {
  const [lastNameProps, resetLastname] = useInput('')
  const [firstNameProps, resetFirstname] = useInput('')
  const [gender, setGender] = useState(0)
  const genderOptions = [
    { value: 0, label: '男' },
    { value: 1, label: '女' }
  ]
  function changegender(value) {
    setGender(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addMember({ firstName: firstNameProps.value, lastName: lastNameProps.value, gender })
    resetLastname()
    resetFirstname()
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default MemberForm
