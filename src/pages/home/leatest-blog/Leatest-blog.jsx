import BlogCard from "./Blog-card";
import LivinfRoomOne from "../../../resources/images/living-room-1.png";
import LivinfRoomTwo from "../../../resources/images/living-room-2.png";
import LivinfRoomThree from "../../../resources/images/living-room-3.png";

export default function LeatestBlog() {
  return (
    <div className="mt-20 px-40 text-center">
      <h2 className="text-[44px] font-bold text-black">Leatest Blog</h2>
      <div className="flex gap-10">
        <BlogCard
          img={LivinfRoomOne}
          title="Top essential Trends in 2023"
        ></BlogCard>
        <BlogCard
          img={LivinfRoomTwo}
          title="Top essential Trends in 2021"
        ></BlogCard>
        <BlogCard
          img={LivinfRoomThree}
          title="Top essential Trends in 2023"
        ></BlogCard>
      </div>
    </div>
  );
}
