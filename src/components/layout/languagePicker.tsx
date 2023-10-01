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
      <div
        id='language-button'
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        style={{
          color: "white",
          borderColor: "transparent",
          cursor: "pointer",
        }}
        onClick={handleClick}>
        <LanguageIcon style={{ width: "30px", height: "30px" }} />
      </div>
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
        <MenuItem onClick={() => handleClose("ar")}>
          <img
            style={{ marginInlineEnd: "8px" }}
            src='https://img.icons8.com/color/48/united-arab-emirates.png'
            width={"20px"}
            height={"20px"}
          />
          العربية
        </MenuItem>
        <MenuItem onClick={() => handleClose("en")}>
          <img
            src='https://img.icons8.com/color/48/usa.png'
            width={"20px"}
            height={"20px"}
            style={{ marginInlineEnd: "8px" }}
          />
          ِEnglish
        </MenuItem>
      </Menu>
    </>
  );
}
