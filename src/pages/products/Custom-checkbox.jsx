import { useState } from "react";

export default function CustomCheckbox({
  value,
  onChecked,
  bgColor,
  checkedColor,
  name,
  isRating,
}) {
  const [checked, setChecked] = useState(false);
  return (
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
        onChange={(e) => {
          onChecked(e);
          setChecked(!checked);
          console.log(checked);
        }}
      />
      <span
        className={
          "inline-flex h-6 w-6 items-center justify-center rounded-md peer-checked:*:block " +
          (checked ? checkedColor : bgColor)
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
      {!isRating && value}
      {isRating && (
        <div className="flex">
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <svg
                key={index}
                className={
                  "h-6 w-6 " +
                  (index < value ? "fill-secondary" : "fill-grey-2")
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            );
          })}
        </div>
      )}
    </label>
  );
}
