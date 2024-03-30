import React from 'react'
import Form from '../Components/Form'
import style from '../styles/styles.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={style.form}>
      <h2>Want to know more?</h2>
      <h4>Send us your questions and we will contact you</h4>
      <Form/>
    </div>
  )
}

export default Contact