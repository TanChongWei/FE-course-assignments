import React from 'react'
import { FormTextInput } from './components/FormTextInput'
import Button from './components/Button'

function login(email, password) {
  console.log(`logging in ${email}, ${password}`)
  return fetch("https://ecomm-service.herokuapp.com/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error("Unauthorised!")
  })
}

export default function LoginForm(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [status, setStatus] = React.useState('none')
  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          setStatus('loading')
          login(email, password)
            .then((res) => props.onSuccess(res.access_token))
            .catch(() => setStatus('error')) 
        }}
      >
        {status === "error" && (
          <div>
						Login failed. Please input a valid email and password
          </div>
        )}
        <FormTextInput title="Email" type="text" setState={setEmail} autoFocus/>
        <FormTextInput title="Password" type="password" setState={setPassword} />
        <Button type="submit" disabled={status === "loading"} />
      </form>
    </div>
  )
}