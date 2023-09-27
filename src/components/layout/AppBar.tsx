import * as React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar } from "@mui/material";
import LanguagePicker from "./languagePicker";
import styles from "./styles/styles.module.css";
import AppSideMenu from "./AppSideMenu";
export default function MainAppBar() {
    const[isSideBarOpen,setIsSideBarOpen]=React.useState(false)
  return (
    <React.Fragment key={"left"}>
      <AppBar
        style={{ background: "#05141f", position: "static", height: "60px" }}
        position='sticky'>
        <Toolbar variant='regular' className={styles.toolBar}>
          <Button
            onClick={() => {
              setIsSideBarOpen(true);
            }}
            className={styles.menuButton}>
            <img src='assets/menuIcon.svg' />
          </Button>
          <img
            alt='logo'
            src='assets/goWhite.png'
            width={142}
            height={33}
            className={styles.logo}
          />
          <LanguagePicker />
        </Toolbar>
      </AppBar>
      <AppSideMenu
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </React.Fragment>
  );
}
