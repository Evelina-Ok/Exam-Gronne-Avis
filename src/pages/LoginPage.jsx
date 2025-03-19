import { useState, useContext } from "react";
import { UserContext } from "../context/userContext.jsx";
import { InputField } from "../components/InputField/InputField";
import { Wrapper } from "../components/Wrapper/Wrapper.jsx";
import { Button } from "../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [error, setError] = useState(null);

  console.log("input values", email, password);

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  // Email validation function
/*   const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }; */

  // Password validation function
/*   const isValidPassword = (password) => {
    return password.length >= 6;
  }; */

 async function submitData(event) {
    event.preventDefault();
    setLoginMessage("");
    setError("");

    if (!email || !password) {
      setError("Indtast email og password.");
    }

    const body = new URLSearchParams();
    body.append("username", email);
    body.append("password", password);

    // Opret et options objekt med HTTP request
    // metode 'POST' og vores body
    const options = {
      method: "POST",
      body: body,
    };

    
    // fetch med POST til server
    fetch("http://localhost:4242/login", options)
      .then((res) => res.json()
      )
      .then((data) => {
        console.log("data response", data);
        if (data.data.access_token) {
          setUserData(data);
          navigate("/dashboard");
          // setLoginMessage(`Du er nu logget ind... Velkommen tilbage ${data.data.user.firstname}`);
        } else {
          setLoginMessage("Du har indtastet forkert password eller email");
        }
      })
      .catch((error) => {
        setError(error.message)
        setLoginMessage("Du har indtastet forkert password eller email")
      });
  }

  return (
    <>
      <Wrapper>
        <h2 style={{ fontWeight: "400" }}>Velkommen tilbage</h2>
        <form onSubmit={submitData}>
          <InputField
            type="email"
            placeholder="Indtast din mail"
            // email="Email"
            id="emailField"
            labelText="Email"
            name="Email"
            action={setEmail}
            value={email}
            // action={(event) => setEmail(event.target.value)}
          />

          <InputField
            type="password"
            placeholder="Indtast dit password"
            // password="Password"
            id="passwordField"
            labelText="Password"
            action={setPassword}
            value={password}
            // action={(event) => setPassword(event.target.value)}
          />

          <input
            type="submit"
            value="login"
            style={{
              backgroundColor: "#1d8439",
              color: "white",
              border: "none",
              padding: "1vw 2vw",
              fontSize: "1.2vw",
            }}
          />
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {loginMessage && <p>{loginMessage}</p>}

        {/* <Button 
        onClick={() => submitData()}
        color="green" size="medium" title="Login"
        style={{ display: "flex", textAlign: "right" }}
        /> */}
      </Wrapper>
    </>
  );
}
