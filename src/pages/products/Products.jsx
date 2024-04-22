import { Link, useOutletContext } from "react-router-dom";
import FilterTab from "./Filter_tab";
import { useState } from "react";
import ViewSettings from "./View-settings";
import filterProducts from "../../utils/filterProducts";
import ProductList from "./product_list/Product-list";

export default function ProductPage() {
  const [productData, filterData] = useOutletContext();

  const [viewOptions, setViewOptions] = useState({
    perPage: 10,
    sortBy: "priceHighToLow",
    view: "grid",
  });

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

  const handleViewOptions = (e) => {
    setViewOptions({
      ...viewOptions,
      [e.name]: e.value,
    });
    console.log(e);
    console.log(viewOptions);
  };

  const filteredData = filterProducts(productData, filters);
  console.log(filteredData[0]);

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
        <div>
          <ViewSettings
            onChange={handleViewOptions}
            viewOptions={viewOptions}
          ></ViewSettings>
          <ProductList
            ProductList={filteredData}
            viewOptions={viewOptions}
          ></ProductList>
        </div>
      </div>
    </main>
  );
}
