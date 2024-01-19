import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory,setvideos } from "../redux/reducer";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const sidebarchange = useSelector((state) => state.sidebarchange);
  
  const dispatch = useDispatch();
  const navi = useNavigate();
  useEffect(() => {
    navi(`/`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);
  
  return (
    <Stack
      direction={"row"}
      sx={{
        transition: '600ms',
        borderRight: "1px solid #3d3d3d",
        padding:sidebarchange ? '10px 20px 0px 20px' : '0',
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        width: sidebarchange?{xs:'100%',md:'140px'}:'0px',
        flexDirection: { md: "column" },
      }}
    >
      { categories.map((category) => (
        <button
          className="category-btn"
          onClick={()=>{dispatch(setSelectedCategory(category.name));dispatch(setvideos([]))}}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight:sidebarchange?'15px':'0',
            }}
          >
            {category.icon}
          </span>
          {<span style={{
            opacity:category.name===selectedCategory?'1':'0.9',
            fontWeight:category.name===selectedCategory?'700':'100',
          }}>{category.name}</span>}
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
