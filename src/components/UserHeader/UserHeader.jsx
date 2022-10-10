import './UserHeader.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/updateProfileAction'


export default function UserHeader() {
  const { token } = useSelector((state) => state.userLogin)
  const { success } = useSelector((state) => state.userLogin)
  const { firstName } = useSelector((state) => state.userProfile)
  const { lastName } = useSelector((state) => state.userProfile)

  const dispatch = useDispatch()

  const [newFirstname, setNewFirstname] = useState()
  const [newLastname, setNewLastname] = useState()
  const [editName, setEditName] = useState('')

  const editButton = (e) => {
    e.preventDefault()
    setEditName((current) => !current)
  }
  const submitName = (e) => {
    e.preventDefault()
    dispatch(updateProfile(token, newFirstname, newLastname))
    if ({ success }) {
      setEditName((current) => !current)
    }
  }
  return (
    <>
      {!editName ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitName}>
            <div className="editNameInputs">
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstname(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastname(e.target.value)}
                required
              />
            </div>
            <div className="editButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
