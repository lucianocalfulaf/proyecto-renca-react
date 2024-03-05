import './Miniatura.css';
import { useState } from 'react';


function Imagen() {
  const [imagen, setImagen] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="seccion-derecha">
      <h2 style={{ fontSize: 'medium', textAlign: 'left' }}>Miniatura</h2>
      {imagen && <img src={imagen} alt="Imagen" style={{ maxWidth: '100%', height: 'auto' }} />}
      <div className="selectFile">
        <label htmlFor="file">Seleccionar archivo</label>
        <input className="files" type="file" name="files[]" id="file" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default Imagen;