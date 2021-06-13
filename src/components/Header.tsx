import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useUser } from "../context/AuthContext";
import AppleIcon from "@material-ui/icons/Apple";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import AddIcon from "@material-ui/icons/Add";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 32,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signUserOut = async () => {
    await Auth.signOut();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => router.push(`/`)}
          >
            <AppleIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Reddit Clone
          </Typography>
          {user && (
            <div>
              <Tooltip title="Create Post">
                <IconButton
                  onClick={() => router.push(`/create`)}
                  aria-label="create"
                  color="inherit"
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => signUserOut()}>Sign Out</MenuItem>
              </Menu>
            </div>
          )}
          {!user && (
            <>
              <Button variant="outlined" onClick={() => router.push(`/login`)}>
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push(`/signup`)}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
