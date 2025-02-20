import { Avatar, Box, Stack, Typography } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { ListMenuItem } from "./ListModalItems";
const ProfileMenu = () => {
  const userProfile = useSelector((state: RootState) => state.userProfile);
  return (
    <Box className="profile">
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ borderBottom: "1px solid #EDEDED", p: 2 }}
      >
        <Avatar
          src={userProfile.user_profile}
          sx={{ width: "55px", height: "55px" }}
        />
        <Box sx={{ flex: 1, whiteSpace: "normal", wordBreak: "break-all" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "16px", fontWeight: "500", color: "#1A1919" }}
          >
            {userProfile.name}
          </Typography>
          <Typography
            component="span"
            sx={{ fontSize: "14px", color: "#666666" }}
          >
            {userProfile.email}
          </Typography>
        </Box>
      </Stack>

      <ListMenuItem />
    </Box>
  );
};

export default ProfileMenu;
