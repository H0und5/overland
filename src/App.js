import { useRef } from 'react';

import admin from './loginDetails.json';

import styles from './App.css';

function App() {

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (emailRef.current.value === admin.email && passwordRef.current.value === admin.password) {
      console.log('Login cleared');
    } else {

      // console.log(admin.email, admin.password)
      // console.log(typeof emailRef.current.value, typeof passwordRef.current.value)
      
      console.log('Something went wrong')
    }
    
    
  }

  return (
    <div>
      <h1>Login Form</h1>

      <form className={styles.formContainer}>
        
        <div className={styles.inputContainer}>
          <h4>Email</h4>
          <input ref={emailRef} placeholder="Enter your email here" type="text"/>
        </div>
        
        <div className={styles.inputContainer}>
          <h4>Password</h4>
          <input ref={passwordRef} placeholder="Enter your password here" type="text"></input>
        </div>

        <button onClick={onSubmitHandler} type="submit">Login</button>

      </form>
    </div>
  );
}

export default App;
