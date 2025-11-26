import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../features/postsSlice';

function PostFilter() {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.posts.filterText);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    dispatch(setFilterText(searchInput));
  };

  const handleClear = () => {
    setSearchInput('');
    dispatch(setFilterText(''));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="post-filter">
      <h2>Filtrar Posts</h2>
      <div className="filter-controls">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Buscar por nombre..."
          className="filter-input"
        />
        <button onClick={handleSearch} className="btn-primary">
          Buscar
        </button>
        {filterText && (
          <button onClick={handleClear} className="btn-secondary">
            Limpiar
          </button>
        )}
      </div>
      {filterText && (
        <p className="filter-info">
          Filtrando por: <strong>{filterText}</strong>
        </p>
      )}
    </div>
  );
}

export default PostFilter;
