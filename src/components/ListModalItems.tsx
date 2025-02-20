import { Box, Stack, Typography } from "@mui/material";
// import SVG from "../assets/svg/index";

export const ListMenuItem = () => {
  const menuItems = [
    { label: "View Profile", icon: "", link: "" },
    { label: "Edit Profile", icon: "", link: "" },
    { label: "Change Password", icon: "", link: "" },
    { label: "Logout", icon: "", link: "" },
  ];
  return (
    <ul style={{ listStyle: "none" }}>
      {" "}
      {menuItems.map((item, index) => {
        return (
          <li key={index}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ cursor: "pointer", color: "#1A1919" }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "16px", fontWeight: "400" }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Stack>
          </li>
        );
      })}
    </ul>
  );
};
