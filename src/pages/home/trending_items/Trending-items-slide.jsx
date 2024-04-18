export default function TrendingSlide({ item }) {
  return (
    <div className="group z-10 mx-auto my-0 mb-10 mt-8 flex h-[80%] w-[80%] flex-col items-center justify-center rounded-md shadow-xl transition-all hover:-translate-y-4 hover:shadow-2xl">
      <div className="p-2">
        <img
          src={item.imageSet[0]}
          alt={item.description}
          className="rounded-md"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3 py-4">
        <p className="mb-2 text-lg font-bold text-primary ">{item.name}</p>
        <p className="mb-[-10px] text-sm font-normal text-grey-3">
          {"Code - " + item.code}
        </p>
        <p className="text-[16px] font-bold tracking-wide text-black">
          {"$" + item.price}
        </p>
      </div>
    </div>
  );
}
