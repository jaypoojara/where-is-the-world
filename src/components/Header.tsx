import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box, Container } from "@mui/system";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

type Props = {
  changeTheme: () => void;
  isDarkTheme: boolean;
};
export default function Header(props: Props) {
  const { changeTheme, isDarkTheme } = props;
  return (
    <Paper>
      <Box alignItems={"center"} padding={"8px"}>
        <Container maxWidth={"lg"}>
          <Grid container>
            <Grid item xs={6} display={"flex"} alignItems={"center"}>
              <Typography fontWeight={600}>Where in the World ?</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box onClick={changeTheme} style={{ cursor :"pointer"}} display={"flex"} alignItems={"center"}>
                <IconButton sx={{ ml: 1 }} color="inherit">
                  {isDarkTheme ? <Brightness7Icon /> : <DarkModeIcon />}
                </IconButton>
                {isDarkTheme ? "Light" : "Dark"} Mode
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Paper>
  );
}
