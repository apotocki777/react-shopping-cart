export default function ProductInfoCard({ product }) {
  return (
    <div className="bg-grey-1">
      <div className="border-2 border-solid px-32">
        <nav className="flex justify-start gap-16">
          <button
            value={"description"}
            className="text-[26px] font-bold text-black"
          >
            Description
          </button>
          <button
            value={"additional-info"}
            className="text-[26px] font-bold text-black"
          >
            Additional Info
          </button>
          <button
            value={"reviews"}
            className="text-[26px] font-bold text-black"
          >
            Reviews
          </button>
          <button value={"video"} className="text-[26px] font-bold text-black">
            Video
          </button>
        </nav>
        <div></div>
      </div>
    </div>
  );
}
