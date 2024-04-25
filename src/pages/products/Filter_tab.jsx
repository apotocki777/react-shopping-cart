import { useOutletContext } from "react-router-dom";
import CategoryBox from "./Category-box";
import RatingCategoryBox from "./Rating-category-box";

export default function FilterTab({ onChecked }) {
  const [productData, filterData] = useOutletContext();

  const brands = filterData.brand.values;
  const discountOffers = filterData.discountPercentage.values;
  const ratings = filterData.rating.values;
  const categories = filterData.category.values;

  return (
    <div className="filter-tab mt-8 w-fit">
      <div className="w-fit">
        <h3 className="w-fitw-fit  border-b-2 border-solid border-black text-[20px] font-bold text-black">
          Product Brand
        </h3>
        <CategoryBox
          onChecked={onChecked}
          values={brands}
          name={"brand"}
          checkedColor={"bg-info"}
          bgColor={"bg-info-light"}
        />
      </div>
      <div className="w-fit">
        <h3 className="w-fit border-b-2 border-solid border-black text-[20px] font-bold text-black">
          Discount Offer
        </h3>
        <CategoryBox
          onChecked={onChecked}
          values={discountOffers}
          name={"discountPercentage"}
          bgColor="bg-danger-light"
          checkedColor="bg-danger"
        />
      </div>
      <div className="w-fit">
        <h3 className="w-fit border-b-2 border-solid border-black text-[20px] font-bold text-black">
          Rating
        </h3>
        <RatingCategoryBox
          onChecked={onChecked}
          values={ratings}
          name={"rating"}
          bgColor={"bg-secondary-light"}
          checkedColor={"bg-secondary"}
        />
      </div>
      <div className="w-fit">
        <h3 className="w-fit border-b-2 border-solid border-black text-[20px] font-bold text-black">
          Categories
        </h3>
        <CategoryBox
          onChecked={onChecked}
          values={categories}
          name={"category"}
          bgColor="bg-danger-light"
          checkedColor="bg-danger"
        />
      </div>
      <div className="w-fit">
        <h3 className="w-fit border-b-2 border-solid border-black text-[20px] font-bold text-black">
          Price
        </h3>
        <CategoryBox
          onChecked={onChecked}
          name={"price"}
          values={[
            "$0 - $150",
            "$150 - $350",
            "$350 - $500",
            "$550 - $800",
            "$800+",
          ]}
          bgColor="bg-danger-light"
          checkedColor="bg-danger"
        />
      </div>
    </div>
  );
}
