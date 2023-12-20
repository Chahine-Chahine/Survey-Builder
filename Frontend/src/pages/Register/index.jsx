import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../../helpers/request_helper";
import Form from "../../components/Form/Form";
import Button from "../../components/common/Button";

function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [showError, setShowError] = useState(null);

  const handleChange = (e) => {
    setShowError(false);
    setCredentials((prevCreds) => {
      return { ...prevCreds, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      let response = await request({
        body: credentials,
        route: "register", 
        method: "POST",
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        console.log("success");
        navigate("/homepage");
      } else if (response.status === 400) {
        setShowError("All fields are required");
      } else {
        setShowError("An error occurred. Please try again later.");
      }
    } catch (error) {
      setShowError("An error occurred. Please try again later.");
      console.error("Error in handleSubmit", error);
    }
  };

  return (
    <div className="auth">
      <Form title={"Register Please!"} buttonText={"Sign up"}>
        {showError && <p className="form-error">{showError}</p>}
        <input
          name="username"
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <input
          name="first_name"
          type="text"
          placeholder="First Name"
          id="first_name"
          onChange={handleChange}
        />
        <input
          name="last_name"
          type="text"
          placeholder="Last Name"
          id="last_name"
          onChange={handleChange}
        />
        <p className="form-small">
          Have an account?{" "}
          <span>
            <Link to={"/"}>Log In</Link>
          </span>
        </p>
        <div onClick={handleSubmit}>
          <Button>Sign Up</Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
