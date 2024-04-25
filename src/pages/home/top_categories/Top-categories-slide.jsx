export default function TopCategoriesSlide({ element }) {
  console.log(element.name, "name");
  return (
    <div className="py-20 text-center">
      <div className="group mx-auto mb-4 h-[14rem] w-[14rem] rounded-full bg-grey-3 shadow-lg transition-all hover:-translate-y-5 hover:shadow-xl">
        <div className="relative h-full w-full rounded-full transition-all group-hover:-translate-y-2 group-hover:translate-x-2">
          <img
            src={element.imageSet[0]}
            alt={element.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <button className="absolute left-14 top-36 z-10 flex rounded-md bg-success p-2 text-[#ffff]">
          View Category
        </button>
      </div>
      <p>{element.category}</p>
    </div>
  );
}
