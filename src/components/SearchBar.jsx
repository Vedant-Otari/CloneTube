import { Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navi = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navi(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
      <Paper
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          width:{md:'400px',sm:'300px'},
          borderRadius: 20,
          border: "1px soldi red",
          pl: 2,
          boxShadow: "none",
          display:'flex',
          justifyContent:'space-between',
          pr:{sm:1},
        }}
      >
        <input
          className="search-bar"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit">
          <Search />
        </IconButton>
      </Paper>
  );
};

export default SearchBar;
