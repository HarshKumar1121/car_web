import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function SearchFilter({
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  fuel,
  setFuel,
  transmission,
  setTransmission
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
        mt: 3,
        mb: 3,
      }}
    >
      <TextField
        label="Brand or Model"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 200 }}
      />

      <Box sx={{ width: 220 }}>
        <label style={{ fontWeight: 500, display: "block", marginBottom: 4 }}>
          Price Range
        </label>
        <Slider
          value={[minPrice, maxPrice]}
          min={50000}
          max={5000000}
          step={10000}
          onChange={(_, newVal) => {
            setMinPrice(newVal[0]);
            setMaxPrice(newVal[1]);
          }}
          valueLabelDisplay="auto"
        />
        <span style={{ fontSize: 13, marginLeft: 6 }}>
          ₹{minPrice} - ₹{maxPrice}
        </span>
      </Box>

      <FormControl sx={{ minWidth: 130 }}>
        <InputLabel>Fuel</InputLabel>
        <Select
          label="Fuel"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="Petrol">Petrol</MenuItem>
          <MenuItem value="Diesel">Diesel</MenuItem>
          <MenuItem value="Electric">Electric</MenuItem>
          <MenuItem value="Hybrid">Hybrid</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Transmission</InputLabel>
        <Select
          label="Transmission"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="Manual">Manual</MenuItem>
          <MenuItem value="Automatic">Automatic</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SearchFilter;
