import * as React from "react";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
export default function LanguagePicker() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id='language-button'
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        variant='outlined'
        sx={{ color: "white", borderColor: "white" }}
        onClick={handleClick}>
        Language
      </Button>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
          style: {
            background: "#05141f",
            color: "white",
          },
        }}>
        <MenuItem onClick={handleClose}>العربية</MenuItem>
        <MenuItem onClick={handleClose}>ِEnglish</MenuItem>
      </Menu>
    </>
  );
}
