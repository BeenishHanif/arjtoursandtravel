import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import Logo from "/images/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleToursMenu = () => {
    setToursOpen(!toursOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "left", padding: "20px" }}>
      <Typography
        color={"black"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2, fontWeight: 'bold', textAlign: 'center' }}
      >
        {/* <img src={Logo} alt="logo" height="70" width="250" /> */}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <ul className="mobile-navigation">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <div
            className="mobile-tours-menu"
            onClick={(e) => {
              e.stopPropagation();
              toggleToursMenu();
            }}
          >
            <div className="mobile-tours-header">
              Tours
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: 20,
                  transform: toursOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            {toursOpen && (
              <ul className="mobile-dropdown-menu">
                <li>
                  <NavLink
                    to="/tours/international"
                    onClick={() => setMobileOpen(false)}
                  >
                    International Tours
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tours/domestic"
                    onClick={() => setMobileOpen(false)}
                  >
                    Domestic Tours
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tours/hajj-umrah"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hajj & Umrah
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "#f9f8f8", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <Toolbar>
            <IconButton
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "black"
              }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"black"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 'bold' }}
            >
              <NavLink to="/">
                <img src={Logo} alt="logo" height="70" width="250" />
              </NavLink>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>
                    About
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink to="/tours/domestic" className={({ isActive }) => isActive ? 'active' : ''}>
                    <span className="dropdown-toggle">
                      Tours
                      <KeyboardArrowDownIcon className="chevron-icon" sx={{ fontSize: 16 }} />
                    </span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/tours/international">International Tours</NavLink>
                    </li>
                    <li>
                      <NavLink to="/tours/domestic">Domestic Tours</NavLink>
                    </li>
                    <li>
                      <NavLink to="/tours/hajj-umrah">Hajj & Umrah</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active' : ''}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none", bgcolor: "#f9f8f8" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 240,
                bgcolor: "#f9F8F8",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Push content below navbar */}
        <Toolbar />
      </Box>
    </>
  );
};

export default Navbar;