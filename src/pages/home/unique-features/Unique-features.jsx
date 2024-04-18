import Chair from "../../../resources/images/chair.png";
import Button from "../../../utils/Button";
import { useOutletContext } from "react-router-dom";

export default function UniqueFeatures() {
  const data = useOutletContext();

  let sofa = data.find((el) => el.name === "IKEA Ektorp Sofa");

  return (
    <div className="mt-20 flex items-center justify-center bg-[#F1F0FF]">
      <div className="relative z-0">
        <div className="absolute left-16 top-20 z-0 h-96 w-96 rounded-full bg-[rgb(179,177,215)]"></div>
        <img src={Chair} alt="" className="relative z-20" />
      </div>
      <div className="flex max-w-lg flex-col gap-8">
        <h3 className="text-[36px] font-bold text-black">
          Unique Features Of leatest & Trending Poducts
        </h3>
        <ul>
          <li className="flex items-center gap-5 text-[16px] text-grey-3">
            <div className="-mt-1 h-3 w-3 rounded-full bg-primary"></div>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="flex items-center gap-5 text-[16px] text-grey-3">
            <div className="-mt-1 h-3 w-3 rounded-full bg-info"></div>
            Reinforced with double wood dowels, glue, screw - nails corner
          </li>
          <li className="text-lato flex items-center gap-5 text-[16px] text-grey-3">
            <div className="-mt-1 h-3 w-3 rounded-full bg-success"></div>
            Arms, backs and seats are structurally reinforced
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Button>Add To Cart</Button>
          <div className="flex flex-col justify-center text-[14px]">
            <p>{sofa.name}</p>
            <p>{"$" + sofa.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
