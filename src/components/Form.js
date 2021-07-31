import React from 'react'
import './Form.css'
import useForm from '../useForm'
import validate from '../validateInfo'
 
const Form = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  
  return (
    <div className="form-body">
      <form action="" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="firstname"></label>
          <input type="text" name="firstname" id="firstname" className={errors.firstname ? 'warning' : 'input' } placeholder="First Name" value={values.firstname} onChange={handleChange} />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="lastname"></label>
          <input type="text" name="lastname" id="lastname" className={errors.lastname ? 'warning' : 'input' } placeholder="Last Name" value={values.lastname} onChange={handleChange} />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="Email Adress" className={errors.email ? 'warning' : 'input' } value={values.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password" placeholder="Password" className={errors.password ? 'warning' : 'input' } value={values.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Claim your free trial</button>
        <p>By clicking the button, you are agreeing to our <a href="/">Terms and Services</a></p>
      </form>
    </div>
  )
}

export default Form
