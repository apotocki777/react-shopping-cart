import { Link, useOutletContext } from "react-router-dom";
import FilterTab from "./Filter_tab";
import { useState } from "react";

export default function ProductPage() {
  const [productData, filterData] = useOutletContext();
  const [filters, setFilters] = useState({
    brand: [],
    discountPercentage: [],
    rating: [],
    category: [],
    price: [],
  });

  const handleChecked = (e) => {
    if (e.target.checked) {
      setFilters({
        ...filters,
        [e.target.name]: [...filters[e.target.name], e.target.value],
      });
    } else {
      setFilters({
        ...filters,
        [e.target.name]: filters[e.target.name].filter(
          (item) => item !== e.target.value
        ),
      });
    }
  };

  const filterProducts = (data) => {
    let filteredData = [...data];

    for (const [key, value] of Object.entries(filters)) {
      if (key === "rating" && value.length > 0) {
        filteredData = filteredData.filter((item) => {
          return value.some((rating) => {
            return +rating === Math.ceil(item[key].value);
          });
        });
      } else if (key === "discountPercentage" && value.length > 0) {
        filteredData = filteredData.filter((item) => {
          return value.some((discount) => {
            return +discount === item[key];
          });
        });
      } else if (key === "price" && value.length > 0) {
        let splitted = value.map((range) => {
          return range.split("-");
        });
        splitted = splitted.map((range) => {
          return range.map((val) => {
            val = val.match(/\d+/g);
            val = +val;
            return val;
          });
        });

        filteredData = filteredData.filter((item) => {
          return splitted.some((range) => {
            if (range.length === 1) {
              return item[key] >= range[0];
            } else {
              return item[key] >= range[0] && item[key] <= range[1];
            }
          });
        });
      } else if (value.length > 0) {
        filteredData = filteredData.filter((item) => {
          return value.includes(item[key]);
        });
      }
    }
    return filteredData;
  };

  filterProducts(productData);
  const filteredData = filterProducts(productData);
  console.log(filteredData);
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <h1 className="text-[52px] font-bold text-black">Products</h1>
      <ul className="flex gap-4 font-lato font-normal text-grey-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>Products</Link>
        </li>
      </ul>
      <div className="mt-20 grid w-full grid-cols-[1fr_3fr]">
        <FilterTab onChecked={handleChecked} />
      </div>
    </main>
  );
}
