import * as React from "react";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import LanguageIcon from "@mui/icons-material/Language";
export default function LanguagePicker() {
  const { t, i18n } = useTranslation("common");
  const { reload } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = (lang?: any) => {
    if (typeof lang =='string') {
      i18n.changeLanguage(lang);
      Cookies.set("language", lang);
      reload();
    }
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
        sx={{ color: "white", borderColor: "transparent" }}
        onClick={handleClick}>
        <LanguageIcon style={{ width: "30px", height: "30px" }} />
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
        <MenuItem onClick={() => handleClose("ar")}>العربية</MenuItem>
        <MenuItem onClick={() => handleClose("en")}>ِEnglish</MenuItem>
      </Menu>
    </>
  );
}
