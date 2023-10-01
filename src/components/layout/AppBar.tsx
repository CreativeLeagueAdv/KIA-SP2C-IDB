import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import LanguagePicker from "./languagePicker";
import styles from "./styles/styles.module.css";
import AppSideMenu from "./AppSideMenu";
import {useScrollDirection} from './useScrollDirection'
import { useRouter } from "next/router";
export default function MainAppBar() {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const [hide, setHide] = React.useState(false);
  const router = useRouter();

  const scrollDirection = useScrollDirection();
  React.useEffect(() => {
    console.log("scrollDirection", scrollDirection);
  }, [scrollDirection]);
  return (
    <React.Fragment key={"left"}>
      <AppBar
        id='bar'
        style={{
          background: "#05141f",
          position:  scrollDirection === "down"?'static':"fixed",
          height: "60px",
          // display: trigger? 'none':'block'
        }}
        position='sticky'>
        <Toolbar variant='regular' className={styles.toolBar}>
          <div
            onClick={() => {
              setIsSideBarOpen(true);
            }}
            className={styles.menuButton}>
            <img src='assets/MenuIcon.svg' />
          </div>
          <img
            alt='logo'
            src='assets/logoWhite.png'
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
