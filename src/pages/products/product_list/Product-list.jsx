import ProductCard from "./Product-card";

export default function ProductList({
  ProductList,
  viewOptions: { view, perPage, sortBy },
}) {
  const columnStyles = "grid grid-cols-1 gap-6";
  const gridStyles = "grid grid-cols-3 gap-6";
  console.log(view);

  return (
    <div className={view === "column" ? columnStyles : gridStyles}>
      {ProductList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          view={view}
        ></ProductCard>
      ))}
    </div>
  );
}
