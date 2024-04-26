export default function SearchBar({ placeholder, buttonText, margin }) {
  return (
    <div
      className={
        margin +
        " " +
        "flex items-center justify-between rounded-md border-2 border-solid border-grey-2 bg-[#ffff] py-0.5 pl-4 pr-0.5"
      }
    >
      <input
        type="search"
        placeholder={placeholder}
        className="p-1 focus:border-none focus:outline-none"
      />
      <button className="h-full min-w-fit rounded-md bg-primary px-2 py-1 text-[12px] text-[#ffff]">
        {buttonText}
      </button>
    </div>
  );
}
