import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../features/postsSlice';

function PostList() {
  const dispatch = useDispatch();
  const { filteredItems, status, error } = useSelector((state) => state.posts);

  const handleDelete = async (id, name) => {
    if (window.confirm(`¿Estás seguro de eliminar el post "${name}"?`)) {
      try {
        await dispatch(deletePost(id)).unwrap();
      } catch (error) {
        alert('Error al eliminar el post: ' + error.message);
      }
    }
  };

  if (status === 'cargando') {
    return <div className="loading">Cargando posts...</div>;
  }

  if (status === 'fallido') {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="post-list">
      <h2>Lista de Posts</h2>
      {!filteredItems || filteredItems.length === 0 ? (
        <p className="no-posts">No hay posts para mostrar</p>
      ) : (
        <table className="posts-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((post) => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td>
                  <button
                    onClick={() => handleDelete(post.id, post.name)}
                    className="btn-delete"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PostList;
