import React from "react";
import { formatMoney } from "../../utils/format-money";


export function InputRangeMoney({ name, value, setValue }) {
  

  const handleSliderChange = (event) => {
    setValue(parseFloat(event.target.value));
  };

  

  return (
    <div className="w-full">
      <input
        type="range"
        id={name}
        name={name}
        min="0"
        max="2000000"
        step="50000"
        value={value}
        onChange={handleSliderChange}
      />
      <p className="text-black mt-1">{formatMoney(value)}</p>
    </div>
  )
}