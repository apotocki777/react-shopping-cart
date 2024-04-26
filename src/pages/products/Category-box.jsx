import { useState } from "react";
import CustomCheckbox from "./Custom-checkbox";

const CategoryBox = ({ values, bgColor, checkedColor, name, onChecked }) => {
  return (
    <div className="py-10">
      {values.map((value, index) => (
        <div key={index}>
          <div className="mb-2">
            <CustomCheckbox
              onChecked={onChecked}
              value={value}
              bgColor={bgColor}
              checkedColor={checkedColor}
              name={name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBox;
