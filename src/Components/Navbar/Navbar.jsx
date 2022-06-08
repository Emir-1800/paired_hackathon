import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useEffect } from "react";

const settings = ["Sign In"];

const ResponsiveAppBar = () => {
  const { cartLength, getCart, cart } = useContext(cartContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log(cartLength);
  // useEffect(() => {
  //   getCart();
  // }, [cart]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F8D800" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins', sans-serif",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "secondary",
              textDecoration: "none",
            }}
          >
            <br></br>B A Z A R
            <img
              width={80}
              src="https://img.freepik.com/free-vector/cute-vegetables-sticker-collection_52683-78214.jpg?w=740&t=st=1654619784~exp=1654620384~hmac=4a9b80f647ba6269e8604d5e5fc45a8464d686f2563269f08afdc529cbf5ea72"
              alt=""
              // srcSet=""
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* burger */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Segoe UI",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            {/* {pages.map((page) => ( */}
            <NavLink to="/add">
              <Button
                // key={pag}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "blue", display: "block" }}
              >
                ADD PRODUCTS
              </Button>
            </NavLink>
            <NavLink to="/productslist">
              <Button
                // key={pag}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "blue", display: "block" }}
              >
                PRODUCTS
              </Button>
            </NavLink>
            {/* ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <NavLink to="/login">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </IconButton>
              </NavLink>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MenuItem>
            <NavLink to="/cart">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="secondary"
              ></IconButton>
              <Badge badgeContent={cartLength} color="error">
                <LocalGroceryStoreIcon />
              </Badge>
            </NavLink>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
