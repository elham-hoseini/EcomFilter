import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function PriceFilter({ onChange }) {
  const [value, setValue] = useState([0, 1000]); // Default price range

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue); // Pass the selected range to the parent component
  };

  return (
    <div>
      <Typography
        id="price-slider"
        gutterBottom
        style={{ fontSize: "20px", marginTop: "30px", marginLeft: -10 }}
      >
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000} // Set your desired max price
      />
      <Typography>
        Price: ${value[0]} - ${value[1]}
      </Typography>
    </div>
  );
}

export default PriceFilter;
