import Button from "../../../utils/Button";
import BgImage from "../../../resources/images/banner-background.png";

export default function Banner() {
  return (
    <div className="mt-20 flex h-[420px] w-full flex-col items-center justify-center bg-banner text-center">
      <h2 className="text-[44px] font-bold text-black">
        Get Latest Update By Subscribe <br></br> 0ur Newsletter
      </h2>
      <Button>Subscribe</Button>
    </div>
  );
}
