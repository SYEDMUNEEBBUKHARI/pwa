import React, { useState } from 'react';


export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div>
      <div className='row mb-5'>
        <div className='six columns'>
          <input
            className='u-full-width'
            placeholder='Service'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </div>
      </div>

      <div className='row mb-5'>
        <div className='six columns'>
          <input
            className='u-full-width'
            placeholder='Subservice'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>

      <div className='row'>
        <div className='six columns'>
          <textarea
            className='u-full-width complaint'
            placeholder='Complaint'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
    </div>
  )
}
