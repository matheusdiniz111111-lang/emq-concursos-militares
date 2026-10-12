export default function LoginPage() {
  return (
    <div className="container inner-page centered-page">
      <div className="auth-card">
        <p className="eyebrow">Acesso ao aluno</p>
        <h1>Entrar na plataforma</h1>

        <form className="auth-form">
          <label>
            Email
            <input type="email" defaultValue="aluno@emqmilitares.com" />
          </label>

          <label>
            Senha
            <input type="password" defaultValue="********" />
          </label>

          <button type="button" className="btn btn-primary full-width">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
