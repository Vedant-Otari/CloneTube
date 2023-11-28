import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory,setSelectedCategory,sidebarchange}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        transition: 'width 5s ease-in-out',
        borderRight: "1px solid #3d3d3d",
        padding:sidebarchange ? '10px 20px 0px 20px' : '0',
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        width: sidebarchange?'auto':'0px',
        flexDirection: { md: "column" },
      }}
    >
      { categories.map((category) => (
        <button
          className="category-btn"
          onClick={()=>setSelectedCategory(category.name)}
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
