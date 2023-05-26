import React from 'react'
import { PersonConsumer } from './Person'
import { UserConsumer } from './UserContext'

function PersonC() {
  return (
    <div>
      <h1>Person Ccccccccccccc</h1>

      <PersonConsumer>
        {
          (name) => <UserConsumer>
            {
              (surname) => <h1>Hi, My Name is {name} and my caste is {surname}</h1>
            }
          </UserConsumer>
        }
      </PersonConsumer>

    </div>
  )
}

export default PersonC
