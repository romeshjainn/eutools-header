import { Box } from "@mui/material";
import HeaderStyled from "./css/headerStyled";
import * as Comp from "./components/index";
import Logo from "./components/Logo";
// import { useEffect } from "react";
// import { getUserDetails } from "./api/user";
// import { transformUser } from "./api/transform/transformUser";
// import { useDispatch } from "react-redux";
// import { setUserProfile } from "./redux/reducers/userProfileReducer";
// import { useSelector } from "react-redux";
// import { RootState } from "@reduxjs/toolkit/query";
type HeaderProps = {
  desktopCollapsed?: boolean;
};

const HeaderTools = ({ desktopCollapsed }: HeaderProps) => {
  // const UserProfile = useSelector((state: RootState) => state.userProfile);
  // const dispatch = useDispatch();
  // const getUserProfileDetails = async () => {
  //   try {
  //     const response = await getUserDetails();
  //     dispatch(setUserProfile(transformUser(response)));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserProfileDetails();
  // }, []);

  return (
    <HeaderStyled>
      <Box
        className="subHeader"
        sx={{
          left: { xs: "0px", md: desktopCollapsed ? "70px" : "255px" },
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <Box
          className="submenu"
          sx={{ maxWidth: "100%", margin: "0 auto", top: 0 }}
        >
          <Logo />
          <Box sx={{ margin: "10px", position: "relative" }}>
            <Comp.NotificationIcons />
            <Comp.ProfileMenu />
          </Box>
        </Box>
      </Box>

      <Comp.LogoutDialog open={false} onClose={() => {}} />
      <Comp.GenericDialog open={false} onClose={() => {}}>
        <p></p>
      </Comp.GenericDialog>
    </HeaderStyled>
  );
};

export default HeaderTools;
