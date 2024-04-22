import Select from "react-select";

export default function ViewSettings({ onChange, viewOptions: { view } }) {
  const perPageOptions = [
    { value: 10, label: "10", name: "perPage" },
    { value: 20, label: "20", name: "perPage" },
    { value: 30, label: "30", name: "perPage" },
    { value: 40, label: "40", name: "perPage" },
    { value: 50, label: "50", name: "perPage" },
  ];

  const sortByOption = [
    { value: "priceHighToLow", label: "Price High -> Low", name: "sortBy" },
    { value: "priceLowToHigh", label: "Price Low -> High", name: "sortBy" },
  ];

  return (
    <div className="flex justify-end gap-20">
      <div className="flex items-center gap-10">
        <p>Per Page</p>
        <Select
          onChange={(e) => onChange(e)}
          options={perPageOptions}
          defaultValue={perPageOptions[0]}
          classNames={{
            indicatorSeparator: () => "hidden",
            valueContainer: () => "w-10",
          }}
        ></Select>
      </div>
      <div className="flex items-center gap-10">
        <p>Sort By</p>
        <Select
          onChange={(e) => onChange(e)}
          options={sortByOption}
          defaultValue={sortByOption[0]}
          classNames={{
            indicatorSeparator: () => "hidden",
            valueContainer: () => "w-40",
          }}
        ></Select>
      </div>
      <div className="flex items-center gap-6">
        <p>View</p>
        <div className="flex gap-4">
          <button
            value={"grid"}
            onClick={(e) => onChange(e.currentTarget)}
            name="view"
          >
            <svg
              className={
                view === "grid"
                  ? "fill-primary"
                  : "fill-none" + " stroke-primary"
              }
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button
            value={"column"}
            name="view"
            onClick={(e) => onChange(e.currentTarget)}
          >
            <svg
              className={view === "column" ? "fill-primary" : "fill-none"}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="6"
                rx="1"
                // fill="#FB2E86"
                stroke="#FB2E86"
              />
              <rect
                x="3"
                y="15"
                width="18"
                height="6"
                rx="1"
                // fill="#FB2E86"
                stroke="#FB2E86"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
