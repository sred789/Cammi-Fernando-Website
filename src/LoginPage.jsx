import { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const result = onLogin(password);

    if (result.success) {
      setError("");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="page lockedPage">
      <main className="passwordCard">
        <p className="kicker">Cammi &amp; Fernando</p>
        <h1 className="title">Wedding Website</h1>
        <p className="subtext">
          Please enter the guest password to access travel, resort, and schedule
          information.
        </p>

        <form onSubmit={handleSubmit} className="passwordForm">
          <label htmlFor="site-password" className="label">
            Guest Password
          </label>

          <input
            id="site-password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoComplete="current-password"
          />

          <button type="submit" className="button">
            Enter Site
          </button>
        </form>

        {error ? <p className="errorText">{error}</p> : null}
      </main>
    </div>
  );
}
