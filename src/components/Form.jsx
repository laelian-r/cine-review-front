import { useState } from 'react'
import '../styles/Form.css'
import { NavLink } from 'react-router-dom'

export default function Form({
  fields,
  title,
  buttonText,
  onSubmit,
  text,
  link,
  linkText,
}) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = ''
      return acc
    }, {})
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            placeholder={field.placeholder}
          />
        </div>
      ))}
      <button type="submit" className="form-button">
        {buttonText}
      </button>
      <p>
        {text} <NavLink to={link}>{linkText}</NavLink>
      </p>
    </form>
  )
}
