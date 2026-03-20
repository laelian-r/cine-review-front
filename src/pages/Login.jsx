import Form from '../components/Form'

export default function Login() {
  const handleLogin = (data) => {
    console.log('Login data:', data)
    // Ici, tu peux appeler ton API de login
  }

  const fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'exemple@email.com',
    },
    {
      name: 'password',
      label: 'Mot de passe',
      type: 'password',
      required: true,
      placeholder: '••••••••',
    },
  ]

  return (
    <Form
      fields={fields}
      title="Connexion"
      buttonText="Se connecter"
      onSubmit={handleLogin}
      text="Vous n'avez pas de compte ?"
      link="/register"
      linkText="S'inscrire"
    />
  )
}
