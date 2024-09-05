import "../css/SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const [bordercolor, setBorderColor] = useState("#fff");
  const [bordercolor2, setBorderColor2] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChnage = (event) => {
    setTerm(event.target.value);
  };

  const handleDesign = () => {
    setBorderColor2(true);
  };

  return (
    <div className="search-head">
      <div className="search-bar">
        <form onSubmit={handleForm}>
          <input
            onChange={handleChnage}
            onClick={handleDesign}
            value={term}
            placeholder="Search photos and illustrations"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
