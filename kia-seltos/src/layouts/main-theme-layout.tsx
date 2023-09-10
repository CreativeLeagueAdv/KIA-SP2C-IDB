import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Layout(children: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showAppBar, setShowAppBar] = React.useState(false);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };
  const router = useRouter();

  React.useEffect(() => {
    const handleShadow = () => {
      if (window?.scrollY >= 20) {
        setShowAppBar(true);
      } else {
        setShowAppBar(false);
      }
    };
    window.addEventListener("scroll", handleShadow, true); //moved it out the function's body
    return window.removeEventListener("scroll", handleShadow);
  }, [router.isReady]);
  const list = (anchor: any) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? "HELLO" : "MAIL"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? "HELLO" : "MAIL"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div id='layout'>
      <React.Fragment key={"left"}>
        {showAppBar ? (
          <AppBar position='sticky'>
            <Toolbar variant='regular'>
              <Button sx={{ mr: 2 }}>MENU</Button>
              <Typography variant='h6' color='inherit' component='div'>
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
        ) : (
          ""
        )}
        <SwipeableDrawer
          anchor={"left"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}>
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
      <div>
        <div>
          <video
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
            id='myVideo'
            width='100%'
            height='100vh'
            autoPlay
            muted>
            <source src={"/assets/promoVideo.webm"} type='video/webm' />
          </video>
        </div>
      </div>
      <div style={{ height: "50vh" }}></div>
    </div>
  );
}
