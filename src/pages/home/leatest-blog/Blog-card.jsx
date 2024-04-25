export default function BlogCard({ img, title }) {
  return (
    <div className="group z-10 mx-auto my-0 mb-10 mt-8 flex flex-col rounded-md shadow-xl transition-all hover:-translate-y-4 hover:shadow-2xl">
      <div className="">
        <img src={img} alt={""} className="rounded-md" />
      </div>
      <div className="flex w-full flex-col gap-3 px-6 py-4 text-left">
        <div className="flex gap-10 text-grey-3">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="-mt-1 h-6 w-6 fill-grey-3"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
            <p>Joe Doe</p>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="-mt-1 h-6 w-6 fill-grey-3"
            >
              <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
            </svg>
            <p>21 August, 2023</p>
          </div>
        </div>
        <p className="mb-2 text-lg font-bold text-primary ">{title}</p>
        <p className="mb-[-10px] text-sm font-normal text-grey-3">
          Nullam nec fringilla erat, ac dapibus nunc.<div></div> Integer semper
          ipsum in fermentum aliquam.
        </p>
        <p className="mt-6 text-[16px] font-bold tracking-wide text-black">
          Read More
        </p>
      </div>
    </div>
  );
}
