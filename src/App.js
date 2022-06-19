import { useRef, useState, useEffect } from "react";

// import components
import Button from "./components/Button";

// import admin details
import admin from "./loginDetails.json";

// import css styles
import styles from "./App.css";

function App() {
  // checks if user is logged in or not
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ user, setUser ] = useState();

  // check if the user and password is logged in storage

  useEffect(() => {

    const userCheck = localStorage.getItem('user');

    setUser(userCheck)

  }, [setUser])

  // ref to detect input values for form
  const emailRef = useRef("");
  const passwordRef = useRef("");


  // when user submits login form

  const onSubmitHandler = (event) => {
    event.preventDefault();

    localStorage.setItem("user", emailRef.current.value);

    if (
      emailRef.current.value === admin.email &&
      passwordRef.current.value === admin.password
    ) {
      // firebase logic should go here. set user into state, make sure react knows.
      console.log("Login cleared");

      setIsLoggedIn(true);

      setUser(emailRef.current.value)
      // sets logged in status to true.
    } else {
      console.log("Something went wrong");
    }
  };



  const onLogoutHandler = () => {

    localStorage.removeItem('user');
    setIsLoggedIn(false);
    // window.location.reload(false);

    setUser()

  };



  // App component rendered here

  return (
    <div>
      <h1>Login Form</h1>

      {!isLoggedIn && user !== 'test@admin.com' && (
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

          <Button cta={"Login"} onClick={onSubmitHandler} type={"submit"}/>
        </form>
      )}

      { user === 'test@admin.com' && (
        <div>
          <p>You're logged in!</p>

          <Button cta={"Sign Out"} onClick={onLogoutHandler}/>
        </div>
      )}
    </div>
  );
}

export default App;
