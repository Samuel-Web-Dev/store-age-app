import React, { useRef, useState } from 'react'
import Card from '../UI/Card';

import styles from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErroModal';

const AddUser = (props) => {
  const userInputRef = useRef()
  const ageInputRef = useRef()
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    const enteredName = userInputRef.current.value
    const enteredAge = ageInputRef.current.value 
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-empty values)'
      });
      return;
    }
    if(enteredAge < 1){
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)'
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge)
    userInputRef.current.value = ''
    ageInputRef.current.value = ''
  }


  const handleError = () => {
    setError(null)
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onHandleError={handleError} />}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>

        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userInputRef} />

        <label htmlFor='age'>Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}

export default AddUser