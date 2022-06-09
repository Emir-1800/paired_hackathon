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
import LiveSearch from "../LiveSearch/LiveSearch";

const settings = ["Sign In"];

const ResponsiveAppBar = () => {
  const { cartLength, getCart, cart } = useContext(cartContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log(cartLength);
  // useEffect(() => {
  //   getCart();
  // }, [searchValue]);

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
              display: { xs: "none", md: "flex", fontSize: 30 },
              fontFamily: "Poppins",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "secondary",
              textDecoration: "none",
            }}
          >
            <br></br>B A Z A R
            <img
              width={110}
              src="https://png.pngtree.com/png-clipart/20220307/original/pngtree-carrot-sticker-cartoon-icon-png-image_7424555.png"
              alt=""
              // srcSet=""
            />
          </Typography>
          <LiveSearch />

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
                sx={{ my: 2, color: "blue", display: "block", fontSize: 15 }}
              >
                ADD PRODUCTS
              </Button>
            </NavLink>
            <NavLink to="/productslist">
              <Button
                // key={pag}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "blue", display: "block", fontSize: 15 }}
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
                  <Avatar alt="" src="" />
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
                <LocalGroceryStoreIcon
                  fontSize="large"
                  style={{ fontSize: "30px" }}
                />
              </Badge>
            </NavLink>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
