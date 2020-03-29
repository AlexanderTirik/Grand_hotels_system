import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function SignUpForm(props) {
  const [successful, setSuccessful] = useState(false)

  const FormStyle = {
    fontFamily: `Futura, "Trebuchet MS", Arial, sans-serif`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
  const Input = {
    padding: "2px",
    background: "none",
    color: "#754857",
    border: "0",
    borderBottom: "2px solid #754857",
    borderLeft: "2px solid #754857",
    fontSize: "1.3vw",
    margin: "5px"
  }
  const Button = {
    border: "2px solid #c2b0b6",
    borderRadius: "5%",
    margin: "5px",
    backgroundColor: "#754857",
    color: "#f5dfe6",
    fontSize: "2vw"
  }
  const Label = {
    fontFamily: `Futura, "Trebuchet MS", Arial, sans-serif`,
    color: "#754857",
    fontSize: "1.2vw",
    margin: "4px 4px 0 4px"
  }
  const Error = {
    fontSize: "1vw",
    color: "red",
    margin: "2px"
  }
  const Suc = {
    fontSize: "1.2vw",
    color: "green",
    margin:"2px",
    textAlign:"center"
  }
  return (
    <Formik
      initialValues={{
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .min(2, "Must be 2 characters or more")
          .required("Required"),
        secondName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .min(2, "Must be 2 characters or more")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required"),
        password: Yup.string().required("Required"),
        confirmPassword: Yup.string()
          .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            )
          })
          .required("Required")
      })}
      onSubmit={(values, actions, errors) => {
        const options = {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json"
          }),
          body: JSON.stringify({
            first_name: values.firstName,
            second_name: values.secondName,
            email: values.email,
            password: values.password
          })
        }
        ;(async () => {
          const response = await fetch("http://127.0.0.1:3001/newUser", options)
          if (response.status == 205) {
            actions.setFieldError("email", "Email is already registered")
            actions.setSubmitting(false)
          }
          if (response.status == 200) {
            actions.resetForm()
            setSuccessful(true)
          }
        })()
      }}
    >
      <Form style={FormStyle}>
    {successful ? <div style ={Suc}>Successful</div> : null}
        <label style={Label} htmlFor="firstName">
          First Name
        </label>
        <Field
          style={Input}
          type="text"
          name="firstName"
          placeholder="First name"
        />
        <ErrorMessage style={Error} component="div" name="firstName" />
        <label style={Label} htmlFor="secondName">
          Second Name
        </label>
        <Field
          style={Input}
          type="text"
          name="secondName"
          placeholder="Second name"
        />
        <ErrorMessage style={Error} component="div" name="secondName" />

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

        <label style={Label} htmlFor="confirmPassword">
          Confirm Password
        </label>
        <Field
          style={Input}
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <ErrorMessage style={Error} component="div" name="confirmPassword" />

        <button style={Button} type="submit">
          {" "}
          Submit{" "}
        </button>
      </Form>
    </Formik>
  )
}
