import { Link, useOutletContext } from "react-router-dom";
import FilterTab from "./Filter_tab";
import { useState } from "react";
import ViewSettings from "./View-settings";
import filterProducts from "../../utils/filterProducts";
import ProductList from "./product_list/Product-list";

export default function ProductPage() {
  const [productData, filterData] = useOutletContext();

  const [page, setPage] = useState(1);

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

    setPage(1);
  };

  const handleViewOptions = (e) => {
    setViewOptions({
      ...viewOptions,
      [e.name]: e.value,
    });
  };

  const onPageChange = (e) => {
    setPage(Number.parseInt(e.target.value));
  };

  const filteredData = filterProducts(productData, filters);
  const numberOfPages = Math.ceil(filteredData.length / viewOptions.perPage);
  const arrOfPages = [];

  for (let i = 0; i < numberOfPages; i++) {
    arrOfPages.push(i + 1);
  }

  // console.log(filteredData[0]);

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
            page={page}
          ></ProductList>
        </div>
      </div>
      <div className="ml-auto mt-10 flex gap-4">
        {arrOfPages.map((num) => {
          return (
            <button
              key={num}
              value={num}
              onClick={onPageChange}
              className={
                "h-10 w-10 rounded-md text-[16px] " +
                (num === page
                  ? "bg-primary text-[#ffff]"
                  : "bg-[#ffff] text-black")
              }
            >
              {num}
            </button>
          );
        })}
      </div>
    </main>
  );
}
