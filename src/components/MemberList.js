import React from 'react'
import { FaMars, FaVenus } from 'react-icons/fa'
import './MemberList.module.css'

function MemberList({ members }) {
  return (
    <ul>
      {members.map((member, i) => (
        <li key={i}>
          {member.gender ? <FaVenus className="female" /> : <FaMars className="male" />}
          {member.lastName} {member.firstName}
        </li>
      ))}
    </ul>
  )
}

export default MemberList
