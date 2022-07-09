import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const customPurple = "#9b51e0";

export const ButtonPrevNext = styled(MuiButton)(() => ({
  borderRadius: "50%",
  width: "5em",
  height: "5em",
  margin: "auto",
  color: "white",
  backgroundColor: customPurple,
  "&:hover": {
    backgroundColor: "white",
    color: customPurple,
  },
}));
