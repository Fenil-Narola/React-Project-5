import { FiSearch } from "react-icons/fi";

const Search = ({ filterContacts }) => {
  return (
    <div className="relative flex flex-grow items-center">
      <FiSearch className="absolute ml-2 text-3xl text-white" />
      <input
        onChange={filterContacts}
        type="text"
        className="h-10 flex-grow rounded-md border border-white bg-transparent pl-11 text-white outline-none"
      />
    </div>
  );
};

export default Search;
