export const transformUser = (userData: any) => {
  const data = userData?.data?.data;
  const { user, additional_data } = data;

  return {
    name: user?.Name,
    email: user?.Email,
    user_profile: additional_data?.user_profile,
  };
};
