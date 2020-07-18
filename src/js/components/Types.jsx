import React from "react";

const Types = ({ options, onSelect, filters }) => (
  <div>
    {console.log('op', options)}
    {options.map((option) => (
      <label className="radio" key={option}>
        <input
          type="radio"
          name="alcoholic"
          value={option}
          checked={filters === option}
          onChange={(e) => onSelect(e.target.value, "alcoholic")}
          data-testid={`app-${option}-type`}
        />
        {option}
      </label>
    ))}
  </div>
);

export default Types;
