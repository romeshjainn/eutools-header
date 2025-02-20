import { Box, Dialog } from "@mui/material";

type GenericDialogProps = {
  open: boolean;
  onClose: () => void;
  maxWidth?: string;
  children: React.ReactNode;
};

const GenericDialog = ({
  open,
  onClose,
  maxWidth = "800px",
  children,
}: GenericDialogProps) => {
  return (
    <Dialog
      open={open}
      sx={{ "& .MuiPaper-root": { maxWidth, borderRadius: "12px" } }}
      onClose={onClose}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </Dialog>
  );
};

export default GenericDialog;
