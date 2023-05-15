export default function Filters({ search, setSearch }) {
  const SearchBox = () => {
    return (
      <div>
        <input
          type="text"
          name="search"
          className="searchbox"
          placeholder="search by job title/description/keywords/company"
          value={search}
        />
      </div>
    );
  };
  return (
    <div>
      <SearchBox />
    </div>
  );
}
