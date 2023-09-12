import { toast } from "react-toastify";

function Validation(values) {
  let error = {};
  const email_pattern = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    toast.warning("Please enter your email");
  } else if (!email_pattern.test(values.email)) {
    toast.warning("Please enter a valid email");
  } else {
    error.email = "";
  }

  if (values.password === "") {
    toast.warning("Please enter your password");
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
