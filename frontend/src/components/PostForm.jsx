import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/postsSlice';

function PostForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.description.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    try {
      await dispatch(createPost(formData)).unwrap();
      setFormData({ name: '', description: '' });
    } catch (error) {
      alert('Error al crear el post: ' + error.message);
    }
  };

  return (
    <div className="post-form">
      <h2>Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa el nombre del post"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Ingresa la descripción del post"
            rows="4"
          />
        </div>
        <button type="submit" className="btn-primary">Crear Post</button>
      </form>
    </div>
  );
}

export default PostForm;
