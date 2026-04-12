import { login } from "../auth/authService";

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login with Authentik</button>
    </div>
  );
}