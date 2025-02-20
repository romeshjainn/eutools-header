import { Box, Button, Dialog, Stack, Typography } from "@mui/material";

type LogoutDialogProps = {
  open: boolean;
  onClose: () => void;
};

const LogoutDialog = ({ open, onClose }: LogoutDialogProps) => {
  return (
    <Dialog
      open={open}
      sx={{ "& .MuiPaper-root": { maxWidth: "400px", borderRadius: "12px" } }}
      onClose={onClose}
    >
      <Box sx={{ p: 2 }}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" sx={{ fontSize: "18px", fontWeight: "500" }}>
            Logout
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#666666" }}
          >
            Are you sure you want to logout? Once you logout, you need to login
            again.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "#D9D9D9",
              color: "#4C4C4C",
              borderRadius: "8px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{ background: "#EC5962", color: "#fff", borderRadius: "8px" }}
          >
            Logout
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default LogoutDialog;
