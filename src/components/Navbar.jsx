import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../utils/images/logo512.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 10,
        borderBottom:'2px solid gray'
      }}
    >
      <Link
        to={"/"}
        width={'33%'}
        style={{
          display: "flex",
          alignItems: "center",
          opacity: 0.9,
          borderRadius: "10px",
        }}
        onMouseOver={(e) => {
          e.target.style.opacity = 1;
          // e.target.style.scale = 1.1;
          e.target.style.boxShadow = '0px 0px 50px gray';
        }}
        onMouseOut={(e) => {
          e.target.style.opacity = 0.9;
          // e.target.style.scale = 1;
          e.target.style.boxShadow = 'none';
        }}
      >
        <img src={logo} alt="logo" height={45} />
        
      </Link>
      <SearchBar/>
      <Typography color={'white'} sx={{fontSize:{sm:'30px',xs:'0px'},mr:{md:'10px'}}}>
        CloneTubes
      </Typography>
    </Stack>
  );
};

export default Navbar;
