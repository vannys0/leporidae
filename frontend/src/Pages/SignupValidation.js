function Validation(values) {
  let error = {};
  const email_pattern = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    error.name = "Field is required";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Field is required";
    // } else if (!email_pattern.test(values.email)) {
    //   error.email = "Invalid Email Format";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Field is required";
  } else {
    error.password = "";
  }
  return error;
  // if (values.password === "") {
  //   error.password = "Field is required";
  //   // } else if (!password_pattern.test(values.password)) {
  //   //   error.password = "Minimum of 8 characters";
  // } else {
  //   error.password = "";
  // }
  // return error;
}

export default Validation;