const SearchInput = ({ className, onChange, value }) => {
  return (
    <input
      type="text"
      className={`border rounded-lg p-2 ${className}`}
      placeholder="Search for a product..."
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchInput;
