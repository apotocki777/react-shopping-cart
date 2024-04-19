const CategoryBox = ({ values, bgColor, checkedColor, name, onChecked }) => {
  return (
    <div className="py-10">
      {values.map((value, index) => (
        <div key={index}>
          <div className="mb-2">
            <label
              htmlFor={value}
              className="flex items-center gap-4 font-lato text-[16px] text-grey-3"
            >
              <input
                type="checkbox"
                id={value}
                name={name}
                value={value}
                className="group peer hidden"
                onChange={onChecked}
              />
              <span
                className={
                  "inline-flex h-6 w-6 items-center justify-center rounded-md peer-checked:*:block" +
                  " peer-checked:" +
                  checkedColor +
                  " " +
                  bgColor
                }
              >
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-4 w-4 peer-checked:block"
                >
                  <path
                    d="M9.47297 0.806574C9.411 0.744088 9.33726 0.694492 9.25602 0.660646C9.17479 0.6268 9.08765 0.609375 8.99964 0.609375C8.91163 0.609375 8.8245 0.6268 8.74326 0.660646C8.66202 0.694492 8.58828 0.744088 8.52631 0.806574L3.55964 5.77991L1.47297 3.68657C1.40863 3.62441 1.33267 3.57554 1.24943 3.54274C1.16619 3.50993 1.07731 3.49385 0.987856 3.49539C0.898402 3.49694 0.810129 3.51609 0.728077 3.55176C0.646025 3.58742 0.5718 3.63889 0.509641 3.70324C0.447482 3.76759 0.398606 3.84355 0.365803 3.92679C0.333001 4.01002 0.316914 4.09891 0.318461 4.18836C0.320009 4.27781 0.339161 4.36609 0.374823 4.44814C0.410485 4.53019 0.46196 4.60441 0.526308 4.66657L3.08631 7.22657C3.14828 7.28906 3.22202 7.33866 3.30326 7.3725C3.3845 7.40635 3.47163 7.42377 3.55964 7.42377C3.64765 7.42377 3.73479 7.40635 3.81603 7.3725C3.89726 7.33866 3.971 7.28906 4.03297 7.22657L9.47297 1.78657C9.54064 1.72415 9.59465 1.64838 9.63159 1.56404C9.66852 1.47971 9.6876 1.38864 9.6876 1.29657C9.6876 1.20451 9.66852 1.11344 9.63159 1.0291C9.59465 0.94477 9.54064 0.869002 9.47297 0.806574Z"
                    fill="white"
                  />
                </svg>
              </span>
              {value}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBox;
