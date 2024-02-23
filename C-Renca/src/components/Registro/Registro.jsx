import { useState } from 'react';
import './Registro.css';
import logo from '../../../public/favicon.png';

function Registro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    confirmEmail: '',
    password: '',
    verifyPassword: '',
    file: null // Nuevo estado para el archivo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file: file });
  };

  const getPasswordStrength = (password) => {
    // Lógica para calcular la fortaleza de la contraseña (puede ser una implementación más compleja)
    return password.length >= 8 ? 'Fuerte' : 'Débil';
  };

  const getPasswordColor = (password) => {
    const strength = getPasswordStrength(password);
    if (strength === 'Fuerte') {
      return 'green';
    } else {
      return password.length > 0 ? 'yellow' : 'red';
    }
  };

  return (
    <div className="registro-container">
      <div className="container-fluid">
        <form className="formulario">
          <h3 className="titulo">Registrarse</h3>
          <br />
          <img src={logo} alt="Registrarse Imagen" className="logo" />
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    className="form"
                    placeholder="Nombre completo:"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <input
                    className="form"
                    placeholder="Correo Electrónico:"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form"
                    placeholder="Fecha de Nacimiento:"
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <input
                    className="form"
                    placeholder="Confirmar Correo Electrónico:"
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form"
                    placeholder="Contraseña:"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div
                    className="password-strength"
                    style={{ backgroundColor: getPasswordColor(formData.password) }}
                  >
                    Fortaleza de la contraseña: {getPasswordStrength(formData.password)}
                  </div>
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  <input
                    className="form"
                    placeholder="Verificar Contraseña:"
                    type="password"
                    id="verifyPassword"
                    name="verifyPassword"
                    value={formData.verifyPassword}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label htmlFor="fileInput">Subir RSH y Certificado de Estudios:</label>
                  <input
                    type="file"
                    id="fileInput"
                    name="fileInput"
                    onChange={handleFileChange}
                    accept=".pdf, image/*" // Opcional: especifica el tipo de archivos permitidos
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button type="submit" className="botonRegister">
            Registrarse
          </button>
          <br />
          <a className="text" href="#" onClick={() => console.log('Ir a login')}>
            ¿Ya tiene una cuenta? Ingrese
          </a>
        </form>
      </div>
    </div>
  );
}

export default Registro;