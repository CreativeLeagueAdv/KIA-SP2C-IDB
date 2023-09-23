import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles/styles.module.css";
export default function AppSideMenu({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsSideBarOpen(open);
  };
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const list = (anchor: any) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "#05141f",
        marginTop: "20px",
        marginInlineStart: "50px",
        position: "relative",
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <CloseIcon className={styles.closeIcon} />
      <List>
        <ListItem
          style={{ padding: "0px", marginBottom: "30px", marginTop: "68px" }}>
          <Image
            alt='logo'
            src='/assets/logoWhite.png'
            className={styles.logo}
            width={120}
            height={29}
          />
        </ListItem>
        {[
          { key: "Welcome", link: "#promo" },
          { key: "Exteriors", link: "#Exteriors" },
          { key: "Interiors", link: "#Interiors" },
          { key: "Safety", link: "#Safety" },
          { key: "Technology", link: "#Technology" },
          { key: "Specifications", link: "#Specifications" },
          { key: "Summary", link: "#Summary" },
        ].map((text, index) => (
          <>
            <ListItem
              style={{ padding: "0px", marginBottom: "30px" }}
              key={text?.key}
              onClick={() => router.push(`${text.link}`)}>
              <ListItemButton style={{ padding: "0px" }}>
                <ListItemText
                  primaryTypographyProps={{ fontSize: {sm:'20px',xs:'20px',lg:'26px',xl:'26px'} }}
                  sx={{
                    color: "#fff",
                  }}
                  primary={t(text?.key)}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      PaperProps={{
        style: {
          background: "#05141f",
        },
      }}
      anchor={i18n?.language == "en" ? "left" : "right"}
      open={isSideBarOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}>
      {list("left")}
    </SwipeableDrawer>
  );
}
