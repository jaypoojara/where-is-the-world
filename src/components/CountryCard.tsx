import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Country } from '../types';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

type Props = {
  country: Country;
  onCountryClick: (country: Country) => void;
};
export default function CountryCard(props: Props) {
  const { country, onCountryClick } = props;
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={3}
      display={"flex"}
      alignItems={"center"}
    >
      <Card
        sx={{ minHeight: 345, cursor: "pointer" }}
        onClick={() => onCountryClick(country)}
        style={{ width: "100%" }}
      >
        <CardMedia
          component="img"
          height="140"
          image={country?.flags?.png}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            marginBottom={"10px"}
            fontWeight={"600"}
          >
            {country?.name?.common}
          </Typography>
          <div>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="span"
              fontWeight={"600"}
            >
              Population:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              {country?.population}
            </Typography>
          </div>
          <div>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="span"
              fontWeight={"600"}
            >
              Region:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              {country?.region}
            </Typography>
          </div>
          {country?.capital && (
            <div>
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
            </div>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
