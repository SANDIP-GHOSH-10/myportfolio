"use client";

import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/project" },
  { label: "Contact", path: "/footer" },
];

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(135deg, #1E1E2F 30%, #3A3A5F 90%)",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
        padding: "10px 0",
      }}
    >
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#FFD700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Sandip Ghosh
          </Typography>
          {/* Desktop Nav */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} passHref>
                <Button
                  sx={{
                    fontWeight: "bold",
                    textTransform: "none",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      color: "#FFD700",
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            {/* Download Resume Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFD700",
                color: "#1E1E2F",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
                textTransform: "none",
                transition: "all 0.3s ease",
                '&:hover': {
                  backgroundColor: "#E6C200",
                },
              }}
              href="../../Sandip New Resume.pdf"  
              download
            >
              Download Resume
            </Button>
          </Box>
          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <IconButton sx={{ display: { md: "none" }, color: "#FFD700" }}>
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;






































// "use client";

// import React from "react";
// import Link from "next/link";
// import { AppBar, Toolbar, Typography, IconButton, Button, Box, Container } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Projects", path: "/projects" },
//   { label: "Contact", path: "/contact" },
// ];

// const Header = () => {
//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         backgroundColor: "#1E1E2F",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//       }}
//     >
//       <Container>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFD700" }}>
//             MyPortfolio
//           </Typography>
//           {/* Desktop Nav */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//             {navLinks.map((link) => (
//               <Link key={link.path} href={link.path} passHref>
//                 <Button
//                   sx={{
//                     fontWeight: "bold",
//                     textTransform: "none",
//                     color: "#FFFFFF",
//                     '&:hover': { color: "#FFD700" },
//                   }}
//                 >
//                   {link.label}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//           {/* Mobile Menu Icon (Hidden on Desktop) */}
//           <IconButton sx={{ display: { md: "none" }, color: "#FFD700" }}>
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Header;
