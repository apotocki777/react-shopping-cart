import CustomCheckbox from "./Custom-checkbox";

const RatingCategoryBox = ({
  values,
  bgColor,
  checkedColor,
  name,
  onChecked,
}) => {
  return (
    <div className="py-10">
      {values.map((value, index) => (
        <div key={index}>
          <div className="mb-2">
            <CustomCheckbox
              bgColor={bgColor}
              checkedColor={checkedColor}
              name={name}
              onChecked={onChecked}
              value={value}
              isRating={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingCategoryBox;
