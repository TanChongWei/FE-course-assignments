import React from 'react'

const DEFAULT_AUTH_STATE = {
  status: "anon",
  accessToken: null
}

const authReducer = (state, evt) => {
  switch(evt.type) {
  case "login":
    window.localStorage.setItem('token', evt.accessToken)
    return {
      ...state,
      status: "authenticated",
      accessToken: evt.accessToken
    }
  case "logout":
    window.localStorage.removeItem('token')
    return {
      ...state,
      status: "anon",
      accessToken: null
    }

  default:
    throw new Error(`Unsupported event type in authReducer - ${evt.type}`)
  } 
}

export function useAuthState() {
  const [state, dispatch] = React.useReducer(authReducer, DEFAULT_AUTH_STATE)

  const login = (accessToken) => {
    return dispatch({
      type:"login",
      accessToken
    })
  }

  const logout = () => {
    dispatch({
      type: "logout"
    })
  }

  return {
    ...state,
    login,
    logout
  }
}