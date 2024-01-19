import { Paper, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useSelector,useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/reducer";

const SearchBar = () => {
  const searchTerm = useSelector(state=>state.searchTerm)
  const dispatch = useDispatch()
  const navi = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navi(`/search/${searchTerm}`);
      dispatch(setSearchTerm(""));
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
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <IconButton type="submit">
          <Search />
        </IconButton>
      </Paper>
  );
};

export default SearchBar;
