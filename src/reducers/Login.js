import React from 'react'
import { AuthContext } from "./ContextReducer";

const Login = (props) => {
  const { authState, authActions } = React.useContext(AuthContext);

  const login = () => {
    authActions.authStateChanged({ name: "SupaDupa" });
  }

  console.log(authState)
  const {user} = authState
  console.log(user)
  const {name} = user

    return (
        <>
    <div>
      <button onClick={() => login()}>Login</button>
    </div>
      <p>{authState ? user.name :"Log in or sign up..."}</p>
    </>
    )
}


export default Login