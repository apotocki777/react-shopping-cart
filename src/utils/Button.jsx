export default function Button({ children }) {
  return (
    <button className="w-fit rounded-lg bg-primary px-10 py-4 text-white">
      {children}
    </button>
  );
}
