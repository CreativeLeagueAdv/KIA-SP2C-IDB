import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { useRouter } from "next/router";
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
  const list = (anchor: any) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "black",
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        {[
          { key: "Promo Video", link: "#promo" },
          { key: "Beauty Shoot", link: "#shoot" },
          { key: "Color Variants", link: "#colors" },
          { key: "Head/Tail Lights", link: "#lights" },
        ].map((text, index) => (
          <>
            <ListItem
              key={text?.key}
              onClick={() => router.push(`${text.link}`)}>
              <ListItemButton>
                <ListItemIcon>
                  <AdsClickIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "#fff" }} primary={text?.key} />
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
          background:'#000'
        }
      }}
      anchor={"left"}
      open={isSideBarOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}>
      {list("left")}
    </SwipeableDrawer>
  );
}
