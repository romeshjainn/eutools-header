import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { RootState } from "@reduxjs/toolkit/query";

const NotificationIcons = () => {
  const userProfile = useSelector((state: RootState) => state.userProfile);

  return (
    <Box className="notification gap-x-2">
      <Box
        sx={{
          mr: 2,
          display: "flex",
          alignItems: "center",
          ml: { md: 1.5, lg: 1.5, xs: "5px" },
          cursor: "pointer",
          "& svg": { color: "#808080" },
        }}
      >
        {/* Add Notification Icon Here */}
      </Box>

      {/* <Box className="profile headerMenu"></Box> */}

      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            display: "inline-flex",
            gap: "5px",
            alignItems: "center",
            color: "#777777",
            cursor: "pointer",
            margin: { md: "10px", lg: "10px", xs: "10px 3px!important" },
          }}
        >
         
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: { md: 1.5, lg: 1.5, xs: "5px" },
          cursor: "pointer",
        }}
      >
        <Avatar
          src={userProfile.user_profile}
          sx={{ width: "40px", height: "40px" }}
        />
      </Box>
    </Box>
  );
};

export default NotificationIcons;
