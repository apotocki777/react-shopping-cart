import ProductCard from "./Product-card";

export default function ProductList({
  ProductList,
  viewOptions: { view, perPage, sortBy },
  page,
}) {
  const columnStyles = "grid grid-cols-1 gap-6 mt-20";
  const gridStyles = "grid grid-cols-3 gap-6 mt-20";

  const findProductsOnPage = (products, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return products.slice(start, end);
  };

  ProductList.sort((a, b) => {
    if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });
  const productsOnPage = findProductsOnPage(ProductList, page, perPage);

  return (
    <div className={view === "column" ? columnStyles : gridStyles}>
      {productsOnPage.length !== 0 ? (
        productsOnPage.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            view={view}
          ></ProductCard>
        ))
      ) : (
        <div className="flex min-w-[1300px] justify-center">
          <h1 className="text-4xl text-black">No products found</h1>
        </div>
      )}
    </div>
  );
}
