export default function Button({ children, onClick, product }) {
  return (
    <button
      onClick={onClick && product ? () => onClick(product) : null}
      className="w-fit rounded-lg bg-primary px-10 py-4 text-[#ffff] active:bg-primary-dark"
    >
      {children}
    </button>
  );
}
