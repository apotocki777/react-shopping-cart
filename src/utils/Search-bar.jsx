export default function SearchBar({ placeholder, buttonText, margin }) {
  return (
    <div
      className={
        margin +
        " " +
        "flex items-center justify-between rounded-md border-2 border-solid border-grey-2 py-0.5 pl-4 pr-0.5"
      }
    >
      <input
        type="search"
        placeholder={placeholder}
        className="p-1 active:border-0 active:outline-0"
      />
      <button className="h-full rounded-md bg-primary px-2 py-1">
        {buttonText}
      </button>
    </div>
  );
}
