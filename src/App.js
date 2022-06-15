import { useRef, useState } from "react";

// import admin details
import admin from "./loginDetails.json";

// import css styles
import styles from "./App.css";

function App() {
  // checks if user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ref to detect input values for form
  const emailRef = useRef("");
  const passwordRef = useRef("");




  // when user submits login form

  const onSubmitHandler = (event) => {
    event.preventDefault();

    sessionStorage.setItem("user", emailRef.current.value);

    if (
      emailRef.current.value === admin.email &&
      passwordRef.current.value === admin.password
    ) {
      console.log("Login cleared");

      // sets logged in status to true.
      setIsLoggedIn(true);
    } else {
      console.log("Something went wrong");
    }
  };


  const onLogoutHandler = () => {

    setIsLoggedIn(false);
    sessionStorage.removeItem('user');

  }









  // App component rendered here

  return (
    <div>
      <h1>Login Form</h1>

      {!isLoggedIn && (
        <form className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <h4>Email</h4>
            <input
              ref={emailRef}
              placeholder="Enter your email here"
              type="text"
            />
          </div>

          <div className={styles.inputContainer}>
            <h4>Password</h4>
            <input
              ref={passwordRef}
              placeholder="Enter your password here"
              type="text"
            ></input>
          </div>

          <button onClick={onSubmitHandler} type="submit">
            Login
          </button>
        </form>
      )}

      {isLoggedIn && (
        <div>
          <p>You're logged in!</p>

          <button onClick={onLogoutHandler}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
