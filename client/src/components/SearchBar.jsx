import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;

    navigate(`/recherche?q=${query}`);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control me-2"
        placeholder="Rechercher un artisan..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Rechercher
      </button>
    </form>
  );
}

export default SearchBar;
