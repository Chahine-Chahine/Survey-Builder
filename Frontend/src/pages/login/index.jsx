    import { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import { request } from "../../helpers/request_helper";
    import Form from "../../components/Form/Form";
    import Button from "../../components/common/Button";


    function SigninPage(){
        const navigate = useNavigate();
        const [credentials, setCredentials] = useState({
            email: "",
            password: "",
        });
        const [showError, setShowError] = useState(null);

        const handleChange = (e) => {
            setShowError(false);
            setCredentials((prevCreds) => {
                return { ...prevCreds, [e.target.name]: e.target.value };
            });
        
        };
        
        const handleSubmit = async () => {
            try{
            let response = await request({
                body: credentials,
                route: "login",
                method: "POST",
            });
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                console.log("success"),
                navigate("/homepage")
             
            } 
            else if (response.status === 401) {
                // Unauthorized - incorrect email or password
                setShowError("Incorrect email or password");
            }
            else {
                setShowError("An error occurred. Please try again later.");
            }
        }catch (error) {
            // Handle unexpected errors (e.g., network issues)
            setShowError("An error occurred. Please try again later.");
            console.error("Error in handleSubmit", error);
        }
        };

        return <>
        <div className="auth">
            <Form title={"Welcome Back!"} buttonText={"Log in"}>
                {showError && (
                    <p className="form-error">{showError}</p>
                )}
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
                <p className="form-small">
                    Don{"'"}t have an account?{" "}
                    <span>
                        <Link to={"/register"}>Register</Link>
                    </span>
                </p>
                <div onClick={handleSubmit}>
                    <Button>Login</Button>
                </div>
            </Form>
        </div>
    </>
    }

    export default SigninPage;