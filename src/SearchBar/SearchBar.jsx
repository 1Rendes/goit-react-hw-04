/* eslint-disable react/prop-types */
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const prompt = form.elements.prompt.value.trim();
    onSearch(prompt);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
