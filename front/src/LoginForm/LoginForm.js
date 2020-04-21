import React, { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import {createAuthProvider} from 'react-token-auth';

export const [useAuth, authFetch, login, logout] =
    createAuthProvider({
        accessTokenKey: 'accessToken'
    });

export default function LoginForm(props) {

  const FormStyle = {
    fontFamily: `Futura, "Trebuchet MS", Arial, sans-serif`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
  const Input = {
    padding: "2px",
    background: "none",
    color: "#754857",
    border: "0",
    borderBottom: "2px solid #754857",
    borderLeft: "2px solid #754857",
    fontSize: "1.3vw",
    margin: "5px",
  }
  const Button = {
    border: "2px solid #c2b0b6",
    borderRadius: "5%",
    margin: "5px",
    backgroundColor: "#754857",
    color: "#f5dfe6",
    fontSize: "2vw",
  }
  const Label = {
    fontFamily: `Futura, "Trebuchet MS", Arial, sans-serif`,
    color: "#754857",
    fontSize: "1.2vw",
    margin: "4px 4px 0 4px",
  }
  const Error = {
    fontSize: "1vw",
    color: "red",
    margin: "2px",
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values, actions) => {
        const options = {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json",
          }),
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        }
        ;(async () => {
          const response = await fetch("http://127.0.0.1:3001/login", options)
          const resjson = await response.json()
          console.log(response.status)

          if (response.status == 401) {
            actions.setFieldError("email", "Invalid email or password")
            actions.setFieldError("password", "Invalid email or password")
            actions.setSubmitting(false)
          }
          if (response.status == 200) {
            console.log(resjson);
            login(resjson)
            document.location.reload(true);
          }
        })()
      }}
    >
      <Form style={FormStyle}>
        <label style={Label} htmlFor="email">
          Email
        </label>
        <Field style={Input} type="email" name="email" placeholder="Email" />
        <ErrorMessage style={Error} component="div" name="email" />

        <label style={Label} htmlFor="password">
          Password
        </label>
        <Field
          style={Input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage style={Error} component="div" name="password" />
        <button style={Button} type="submit">
          {" "}
          Submit{" "}
        </button>
      </Form>
    </Formik>
  )
}
