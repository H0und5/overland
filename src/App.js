import { useRef, useState } from 'react';

// import admin details
import admin from './loginDetails.json';

// import css styles
import styles from './App.css';




function App() {

  // checks if user is logged in or not
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  // ref to detect input values for form
  const emailRef = useRef('');
  const passwordRef = useRef('');

  // when user submits login form

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // const { user, rememberMe } = this.state;
    // localStorage.setItem('rememberMe', rememberMe);
    // localStorage.setItem('user', rememberMe ? user : '');

    localStorage.setItem('user', emailRef.current.value);
    localStorage.setItem('password', passwordRef.current.value);

    if (emailRef.current.value === admin.email && passwordRef.current.value === admin.password) {
      console.log('Login cleared');

      // sets logged in status to true.
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

        {isLoggedIn && 
          <p>You're logged in!</p>
        }

    </div>
  );
}

export default App;
