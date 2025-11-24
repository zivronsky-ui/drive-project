import { useState } from "react";
import { useNavigate } from "react-router";
import "../App.css";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  let navigate = useNavigate();

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login successful") {
          console.log("data: ", data);
          console.log("Login successful:", data.user);
          localStorage.setItem("currentUser", JSON.stringify(data.user.name));
          setMessage("");
          navigate(`/myDrive/${username}`);
        } else {
          console.error("Login failed:", data.message);
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  }
  return (
    <>
      {" "}
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
          />

          <button type="submit">log in</button>

          <p>{message}</p>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
