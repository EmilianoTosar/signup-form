export default function validateInfo(values) {
  let errors = {}

  if (!values.firstname) {
    errors.firstname = 'First Name cannot be empty'
    errors.class = 'warning'
  }

  if (!values.lastname) {
    errors.lastname = 'Last Name cannot be empty'
    errors.class = 'warning'
  }

  if (!values.password) {
    errors.password = 'Password cannot be empty'
    errors.class = 'warning'
  }

  if (!values.email) {
    errors.email = 'Email cannot be empty';
    errors.class = 'warning'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Looks like this is not an email';
  }

  return errors
}