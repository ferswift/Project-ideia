import { useState } from "react";
import { login } from "../services/auth";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await login(email, password);
      setSuccess("Login bem-sucedido!");
      setIsAuthenticated(true);
    } catch (error) {
      setError("Falha ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h1>Bem-vindo!</h1>
        <button onClick={() => setIsAuthenticated(false)}>Sair</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1>Tela Login</h1>

      <div className="flex flex-col gap-4 mt-5 mb-5">
        <input
          className="text-center border-2 border-gray-400 rounded-md"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="text-center border-2 border-gray-400 rounded-md"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </div>
  );
};
