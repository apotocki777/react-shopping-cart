import { useState } from "react";

export default function ProductInfoCard({ product }) {
  const [selectedTab, setSelectedTab] = useState("description");

  const handleTabClick = (e) => {
    setSelectedTab(e.target.value);
  };

  return (
    <div className="bg-grey-1">
      <div className="border-2 border-solid px-32 pb-10 pt-20">
        <nav className="flex justify-start gap-16">
          <button
            onClick={(e) => handleTabClick(e)}
            value={"description"}
            className={
              "text-[26px] font-bold text-black " +
              (selectedTab === "description" ? "underline" : "")
            }
          >
            Description
          </button>
          <button
            onClick={(e) => handleTabClick(e)}
            value={"additional-info"}
            className={
              "text-[26px] font-bold text-black " +
              (selectedTab === "additional-info" ? "underline" : "")
            }
          >
            Additional Info
          </button>
          <button
            onClick={(e) => handleTabClick(e)}
            value={"reviews"}
            className={
              "text-[26px] font-bold text-black " +
              (selectedTab === "reviews" ? "underline" : "")
            }
          >
            Reviews
          </button>
          <button
            onClick={(e) => handleTabClick(e)}
            value={"video"}
            className={
              "text-[26px] font-bold text-black " +
              (selectedTab === "video" ? "underline" : "")
            }
          >
            Video
          </button>
        </nav>
        <div>
          {selectedTab === "description" ? (
            <div className="py-10">
              <h3 className="mb-4 font-bold">{product.name}</h3>
              <p className="text-[18px] text-grey-3">{product.description}</p>
              <h3 className="mb-4 mt-4 font-bold">More Details</h3>
              <ul className="flex flex-col gap-2 text-grey-3">
                <li className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac quam dolor. In dignissim lectus sed nisl tempor, ac
                  porttitor libero consectetur.
                </li>
                <li className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac
                  porttitor libero consectetur. Pellentesque diam dolor,
                  tincidunt nec ante.
                </li>
                <li className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Pellentesque diam dolor, tincidunt nec ante congue, tincidunt
                  facilisis tortor.
                </li>
                <li className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Mauris vitae massa molestie, sagittis ligula vel, egestas
                  massa. Phasellus quis sodales augue. Donec nec ultricies diam.
                </li>
                <li className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Phasellus quis sodales augue. Integer feugiat odio ut dictum
                  viverra.
                </li>
              </ul>
            </div>
          ) : (
            <div className="py-40">
              <h3 className="text-3xl font-bold text-black">
                Content for {selectedTab}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
