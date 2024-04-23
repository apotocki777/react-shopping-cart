import ProductCard from "./Product-card";

export default function ProductList({
  ProductList,
  viewOptions: { view, perPage, sortBy },
  page,
}) {
  const columnStyles = "grid grid-cols-1 gap-6 mt-8";
  const gridStyles = "grid grid-cols-3 gap-6 mt-8";

  const findProductsOnPage = (products, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return products.slice(start, end);
  };

  const productsOnPage = findProductsOnPage(ProductList, page, perPage);

  productsOnPage.sort((a, b) => {
    if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  //   console.log(productsOnPage);

  return (
    <div className={view === "column" ? columnStyles : gridStyles}>
      {productsOnPage.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          view={view}
        ></ProductCard>
      ))}
    </div>
  );
}
