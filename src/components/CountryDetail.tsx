import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import { Country } from '../types';

import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

type Props = {
  country: Country;
  onCountryClick: (country: Country) => void;
  countries: Country[]
};

export default function CountryDetail(props: Props) {
  const { country, onCountryClick, countries} = props;
  const theme = useTheme();

  const onClickBorderCountry = (code : string) =>{
    const selectedBorderCountry = countries.find((ele) => (ele.cca3 === code));
    selectedBorderCountry && onCountryClick(selectedBorderCountry)
  }

  return (
    <Box>
      <Box marginY={"50px"}>
        <Button
          variant="contained"
          size="medium"
          onClick={() => onCountryClick({} as Country)}
          style={{
            backgroundColor: theme.palette.primary.light,
          }}
        >
          <ArrowBackIcon />
          <Typography
            variant="subtitle1"
            textTransform={"capitalize"}
            component="span"
            marginBottom={"0px"}
            marginLeft={"5px"}
          >
            Back
          </Typography>
        </Button>
      </Box>

      <Grid container spacing={10}>
        <Grid
          item
          xs={12}
          lg={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box>
            <CardMedia
              component="img"
              //   height="360"
              image={country?.flags?.svg}
              alt="green iguana"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              fontWeight={600}
              component="div"
              marginBottom={"20px"}
            >
              {country?.name?.common}
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={12} lg={6} width={"100%"}>
                <Box>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="span"
                    fontWeight={"600"}
                  >
                    Native Name:{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="span"
                  >
                    {Object.values(country?.name?.nativeName)[0]?.official}
                  </Typography>
                </Box>
                <Box marginTop={"8px"}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="span"
                    fontWeight={"600"}
                  >
                    Population:{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="span"
                  >
                    {country?.population}
                  </Typography>
                </Box>
                <Box marginTop={"8px"}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="span"
                    fontWeight={"600"}
                  >
                    Region:{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="span"
                  >
                    {country?.region}
                  </Typography>
                </Box>
                {country?.subregion && (
                  <Box marginTop={"8px"}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="span"
                      fontWeight={"600"}
                    >
                      Sub Region:{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      {country?.subregion}
                    </Typography>
                  </Box>
                )}
                {country?.capital && (
                  <Box marginTop={"8px"}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="span"
                      fontWeight={"600"}
                    >
                      Capital:{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      {country.capital[0]}
                    </Typography>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} lg={6} width={"100%"}>
                {country?.tld && (
                  <Box>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="span"
                      fontWeight={"600"}
                    >
                      Top Level Domain:{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      {country?.tld[0]}
                    </Typography>
                  </Box>
                )}
                {country?.currencies && (
                  <Box marginTop={"8px"}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="span"
                      fontWeight={"600"}
                    >
                      Currencies:{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      {Object.keys(country?.currencies)[0]}
                    </Typography>
                  </Box>
                )}
                {country?.languages && (
                  <Box marginTop={"8px"}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="span"
                      fontWeight={"600"}
                    >
                      Languages:{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      {Object.values(country?.languages).join(",")}
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
            {country?.borders && (
              <Box
                marginTop={"50px"}
                display={"flex"}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="span"
                  fontWeight={"600"}
                  mb={0}
                >
                  Border Countries:{" "}
                </Typography>
                {country.borders.map((ele , index) => (
                  <Paper
                    color="text.secondary"
                    component="span"
                    style={{
                      margin: "8px",
                      padding: "8px 14px",
                      cursor: "pointer"
                    }}
                    key={index}
                    onClick={() => onClickBorderCountry(ele)}
                  >
                    {ele}
                  </Paper>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
