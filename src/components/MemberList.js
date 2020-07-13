import React from 'react'
import { FaMars, FaVenus } from 'react-icons/fa'

function MemberList({ members }) {
  return (
    <ul>
      {members.map((member, i) => (
        <li key={i}>
          {member.gender ? <FaVenus /> : <FaMars />}
          {member.lastName} {member.firstName}
        </li>
      ))}
    </ul>
  )
}

export default MemberList
