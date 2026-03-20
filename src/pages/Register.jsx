import Form from '../components/Form'

export default function Register() {
  const handleRegister = (data) => {
    console.log('Register data:', data)
    // Ici, tu peux appeler ton API d'inscription
  }

  const fields = [
    {
      name: 'name',
      label: 'Nom',
      type: 'text',
      required: true,
      placeholder: 'Jean Dupont',
    },
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
    {
      name: 'confirmPassword',
      label: 'Confirmer le mot de passe',
      type: 'password',
      required: true,
      placeholder: '••••••••',
    },
  ]

  return (
    <Form
      fields={fields}
      title="Inscription"
      buttonText="S'inscrire"
      onSubmit={handleRegister}
      text="Vous avez déjà un compte ?"
      link="/login"
      linkText="Se connecter"
    />
  )
}
