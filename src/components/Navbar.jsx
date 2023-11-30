import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../utils/images/logo512.png";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({sidebarchange, setsidebarchange}) => {

  return (
    <Stack
      direction={"row"}
      maxHeight={'5vh'}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 10,
        borderBottom: "2px solid gray",
      }}
    >
      <Box display={"flex"} alignItems={"center"}>
        <button onClick={()=>sidebarchange?setsidebarchange(false):setsidebarchange(true)} className="category-btn" style={{padding:'0px 10px 0px 10px'}}>
          <MenuIcon sx={{ color: "white" }} />
        </button>
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <img className="logo" src={logo} alt="logo" height={45} 
          onMouseOver={(e) => {
            e.target.style.opacity = 1;
            e.target.style.boxShadow = "0px 0px 50px gray";
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = 0.9;
            e.target.style.boxShadow = "none";
          }}/>
        </Link>
      </Box>
      <SearchBar />
      <Typography
        color={"white"}
        sx={{ fontSize: { sm: "30px", xs: "0px" }, mr: { md: "10px" } }}
      >
        CloneTubes
      </Typography>
    </Stack>
  );
};

export default Navbar;
