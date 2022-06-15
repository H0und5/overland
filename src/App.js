import { useRef, useState } from 'react';

import admin from './loginDetails.json';

import styles from './App.css';

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  // when user submits login form

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (emailRef.current.value === admin.email && passwordRef.current.value === admin.password) {
      console.log('Login cleared');

      setIsLoggedIn(true)
    } else {
      console.log('Something went wrong')
    }
    
  }

  // App component rendered here

  return (
    <div>
      <h1>Login Form</h1>

        {!isLoggedIn &&
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
        }

    </div>
  );
}

export default App;
