import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import {
  Backdrop,
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import { useTheme } from "@mui/material";
import CountriesAPI from "../../api/CountriesAPI";
import CountryCard from "../../components/CountryCard";
import CountryDetail from "../../components/CountryDetail";
import { Country } from '../../types';
import FormControl from "@mui/material/FormControl";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Countries() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState([]);
  const [selctedCountry, setSelectedCountry] = useState({});
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const names = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const getCountryList = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await CountriesAPI.getCountry(url);
      if (response) {
        setCountries(response.data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCountryList("/all");
  }, []);

  const onChangeSearch = (value: string) => {
    setRegion("");
    setSearch(value);
    getCountryList(value === "" ? "/all" : `/name/${value}`);
  };

  const onChangeRegion = (value: string) => {
    setSearch("");
    setRegion(value);
    getCountryList(value === "" ? "/all" : `/region/${value}`);
  };

  const onCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  if (selctedCountry && Object.keys(selctedCountry).length > 0) {
    return (
      <Box>
        <Container maxWidth={"lg"} sx={{ paddingX: 5, paddingBottom: 5 }}>
          <CountryDetail
            country={selctedCountry as Country}
            onCountryClick={onCountryClick}
          />
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container maxWidth={"lg"} sx={{ paddingX: 5 }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          sx={{ mt: 3 }}
          gap={3}
        >
          <TextField
            placeholder="Search for a country..."
            variant="filled"
            className={
              theme.palette.mode === "dark"
                ? "search-input-dark"
                : "search-input"
            }
            onChange={(e) => onChangeSearch(e.target.value)}
            value={search}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                backgroundColor: theme.palette.primary.light,
                minWidth: "295px",
                height: "45px",
              },
            }}
            hiddenLabel
          />

          <FormControl variant="outlined" sx={{ width: 200 }}>
            <Select
              displayEmpty
              value={region}
              className={
                theme.palette.mode === "dark"
                  ? "region-select-dark"
                  : "region-select"
              }
              notched={false}
              onChange={(e) => onChangeRegion(e.target.value)}
              renderValue={(selected) => {
                if (selected === "") {
                  return "Filter By Region";
                }

                return selected;
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              style={{
                border: "none",
                outline: "none",
                backgroundColor: theme.palette.primary.light,
                height: "45px",
              }}
            >
              <MenuItem disabled value="">
                Filter By Region
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Grid container marginTop={"20px"} spacing={6}>
          {countries &&
            countries.map((country: Country) => (
              <CountryCard country={country} onCountryClick={onCountryClick} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
