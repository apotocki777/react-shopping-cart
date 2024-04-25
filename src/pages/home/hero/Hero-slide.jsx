import Button from "../../../utils/Button";
import LampPhoto from "../../../resources/images/lamp.png";
import HeadphonesPhoto from "../../../resources/images/headphones.png";

export default function HeroSlide() {
  return (
    <div className="relative flex h-fit w-full items-center justify-center bg-hero px-12 py-12">
      <img
        src={LampPhoto}
        alt="a photo of a lamp"
        className="absolute left-0 top-0 h-[300px] w-[300px]"
      />
      <div className="ml-72 flex max-w-[85%] items-center gap-4">
        <div className="flex w-fit max-w-[50%] flex-col">
          <p className="font-lato text-base font-bold text-primary">
            Best Headphones For Your Life....
          </p>
          <h1 className="text-[52px] font-bold text-black">
            New Trendy Collection Headphones
          </h1>
          <p className="mb-6 font-lato font-normal text-grey-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <Button>Shop Now</Button>
        </div>
        <div className="relative flex min-h-[700px] min-w-[700px]">
          <img
            src={HeadphonesPhoto}
            alt="photo of headphoned"
            className="object-contain"
          />
          <svg
            width="137"
            height="139"
            viewBox="0 0 137 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-20"
          >
            <path
              d="M38.665 131.813C-11.335 103.813 0.888428 81.5 2.38879 65.5C2.38879 55.9 25.8315 10.9793 34.6648 4.31264C40.1648 0.145977 57.8647 -4.68736 84.6647 9.31264C145.865 34.9126 140.498 78.3126 130.165 96.8126C122.665 117.479 93.8648 153.413 38.665 131.813Z"
              fill="#603EFF"
            />
            <path
              d="M40.9806 59.288C39.5646 59.288 38.1846 59.024 36.8406 58.496C35.4966 57.968 34.4526 57.332 33.7086 56.588L36.4086 52.412C36.8406 52.94 37.4526 53.384 38.2446 53.744C39.0606 54.08 39.8406 54.248 40.5846 54.248C41.1366 54.248 41.6526 54.128 42.1326 53.888C42.6126 53.648 42.9966 53.288 43.2846 52.808C43.5726 52.328 43.7166 51.74 43.7166 51.044C43.7166 50.276 43.5606 49.604 43.2486 49.028C42.9606 48.452 42.5286 48.008 41.9526 47.696C41.4006 47.36 40.7406 47.192 39.9726 47.192C39.2286 47.192 38.5206 47.3 37.8486 47.516C37.1766 47.708 36.3846 48.044 35.4726 48.524H35.4366V35.132H47.3526V40.172H39.9366V44.024L39.3246 42.944C39.6606 42.896 39.9846 42.86 40.2966 42.836C40.6086 42.812 40.9206 42.8 41.2326 42.8C42.9126 42.8 44.3286 43.172 45.4806 43.916C46.6566 44.66 47.5566 45.644 48.1806 46.868C48.8046 48.092 49.1166 49.424 49.1166 50.864C49.1166 52.448 48.7566 53.876 48.0366 55.148C47.3166 56.42 46.3326 57.428 45.0846 58.172C43.8606 58.916 42.4926 59.288 40.9806 59.288ZM62.7454 59.036C61.3774 59.036 60.0814 58.796 58.8574 58.316C57.6574 57.836 56.5894 57.104 55.6534 56.12C54.7414 55.112 54.0214 53.852 53.4934 52.34C52.9654 50.804 52.7014 49.004 52.7014 46.94C52.7014 44.636 52.9534 42.716 53.4574 41.18C53.9614 39.62 54.6574 38.372 55.5454 37.436C56.4574 36.5 57.5254 35.84 58.7494 35.456C59.9734 35.048 61.3054 34.844 62.7454 34.844C64.1134 34.844 65.3974 35.084 66.5974 35.564C67.8214 36.044 68.8894 36.788 69.8014 37.796C70.7374 38.78 71.4694 40.04 71.9974 41.576C72.5254 43.088 72.7894 44.876 72.7894 46.94C72.7894 49.076 72.5254 50.912 71.9974 52.448C71.4694 53.984 70.7374 55.244 69.8014 56.228C68.8654 57.188 67.7974 57.896 66.5974 58.352C65.3974 58.808 64.1134 59.036 62.7454 59.036ZM62.7094 54.032C63.9094 54.032 64.8454 53.72 65.5174 53.096C66.1894 52.448 66.6574 51.572 66.9214 50.468C67.2094 49.364 67.3534 48.14 67.3534 46.796C67.3534 45.476 67.2094 44.3 66.9214 43.268C66.6574 42.236 66.1894 41.42 65.5174 40.82C64.8454 40.196 63.9094 39.884 62.7094 39.884C61.5334 39.884 60.6094 40.196 59.9374 40.82C59.2654 41.444 58.7974 42.284 58.5334 43.34C58.2694 44.396 58.1374 45.584 58.1374 46.904C58.1374 48.224 58.2694 49.424 58.5334 50.504C58.7974 51.584 59.2654 52.448 59.9374 53.096C60.6094 53.72 61.5334 54.032 62.7094 54.032ZM81.6429 48.416C80.3229 48.416 79.2309 48.116 78.3669 47.516C77.5029 46.916 76.8669 46.1 76.4589 45.068C76.0509 44.036 75.8469 42.872 75.8469 41.576C75.8469 40.28 76.0509 39.128 76.4589 38.12C76.8669 37.088 77.5029 36.272 78.3669 35.672C79.2309 35.072 80.3229 34.772 81.6429 34.772C82.9629 34.772 84.0429 35.072 84.8829 35.672C85.7469 36.272 86.3829 37.088 86.7909 38.12C87.2229 39.128 87.4389 40.28 87.4389 41.576C87.4389 42.872 87.2229 44.036 86.7909 45.068C86.3829 46.1 85.7469 46.916 84.8829 47.516C84.0429 48.116 82.9629 48.416 81.6429 48.416ZM80.2389 41.576C80.2389 42.56 80.3349 43.364 80.5269 43.988C80.7189 44.588 81.0909 44.888 81.6429 44.888C82.1949 44.888 82.5549 44.588 82.7229 43.988C82.9149 43.364 83.0109 42.56 83.0109 41.576C83.0109 40.448 82.9149 39.632 82.7229 39.128C82.5549 38.6 82.1949 38.336 81.6429 38.336C81.0909 38.336 80.7189 38.6 80.5269 39.128C80.3349 39.632 80.2389 40.448 80.2389 41.576ZM96.6909 60.008C95.3709 60.008 94.2789 59.708 93.4149 59.108C92.5509 58.508 91.9149 57.692 91.5069 56.66C91.0989 55.628 90.8949 54.464 90.8949 53.168C90.8949 51.872 91.0989 50.72 91.5069 49.712C91.9149 48.68 92.5509 47.864 93.4149 47.264C94.2789 46.664 95.3709 46.364 96.6909 46.364C98.0109 46.364 99.0909 46.664 99.9309 47.264C100.795 47.864 101.431 48.68 101.839 49.712C102.271 50.72 102.487 51.872 102.487 53.168C102.487 54.464 102.271 55.628 101.839 56.66C101.431 57.692 100.795 58.508 99.9309 59.108C99.0909 59.708 98.0109 60.008 96.6909 60.008ZM95.2869 53.168C95.2869 54.152 95.3829 54.956 95.5749 55.58C95.7669 56.18 96.1389 56.48 96.6909 56.48C97.2429 56.48 97.6029 56.18 97.7709 55.58C97.9629 54.956 98.0589 54.152 98.0589 53.168C98.0589 52.04 97.9629 51.224 97.7709 50.72C97.6029 50.192 97.2429 49.928 96.6909 49.928C96.1389 49.928 95.7669 50.192 95.5749 50.72C95.3829 51.224 95.2869 52.04 95.2869 53.168ZM100.795 34.772L83.2989 59.072L78.3669 59L95.7909 34.772H100.795ZM40.737 89.788C40.737 87.964 41.085 86.236 41.781 84.604C42.477 82.972 43.437 81.532 44.661 80.284C45.909 79.012 47.349 78.016 48.981 77.296C50.613 76.576 52.365 76.216 54.237 76.216C56.085 76.216 57.825 76.576 59.457 77.296C61.089 78.016 62.529 79.012 63.777 80.284C65.049 81.532 66.033 82.972 66.729 84.604C67.449 86.236 67.809 87.964 67.809 89.788C67.809 91.66 67.449 93.412 66.729 95.044C66.033 96.676 65.049 98.116 63.777 99.364C62.529 100.588 61.089 101.548 59.457 102.244C57.825 102.94 56.085 103.288 54.237 103.288C52.365 103.288 50.613 102.94 48.981 102.244C47.349 101.548 45.909 100.588 44.661 99.364C43.437 98.116 42.477 96.676 41.781 95.044C41.085 93.412 40.737 91.66 40.737 89.788ZM46.137 89.788C46.137 90.964 46.341 92.068 46.749 93.1C47.181 94.108 47.769 95.008 48.513 95.8C49.281 96.568 50.157 97.168 51.141 97.6C52.149 98.032 53.241 98.248 54.417 98.248C55.545 98.248 56.589 98.032 57.549 97.6C58.533 97.168 59.385 96.568 60.105 95.8C60.825 95.008 61.389 94.108 61.797 93.1C62.205 92.068 62.409 90.964 62.409 89.788C62.409 88.588 62.193 87.472 61.761 86.44C61.353 85.408 60.777 84.508 60.033 83.74C59.313 82.948 58.461 82.336 57.477 81.904C56.493 81.472 55.425 81.256 54.273 81.256C53.121 81.256 52.053 81.472 51.069 81.904C50.085 82.336 49.221 82.948 48.477 83.74C47.733 84.508 47.157 85.408 46.749 86.44C46.341 87.472 46.137 88.588 46.137 89.788ZM74.2373 103V91.66H71.5733V87.196H74.2373V81.724C74.2373 79.66 74.8253 77.98 76.0013 76.684C77.2013 75.364 78.9293 74.704 81.1853 74.704C81.8573 74.704 82.6013 74.812 83.4173 75.028C84.2573 75.22 84.9893 75.544 85.6133 76L83.4893 79.636C83.2493 79.324 82.9613 79.12 82.6253 79.024C82.3133 78.904 82.0133 78.844 81.7253 78.844C81.0053 78.844 80.4173 79.084 79.9613 79.564C79.5053 80.044 79.2773 80.812 79.2773 81.868V87.196H84.0293V91.66H79.2773V103H74.2373ZM85.8653 103V91.66H83.2013V87.196H85.8653V81.724C85.8653 79.66 86.4533 77.98 87.6293 76.684C88.8293 75.364 90.5573 74.704 92.8133 74.704C93.4853 74.704 94.2293 74.812 95.0453 75.028C95.8853 75.22 96.6173 75.544 97.2413 76L95.1173 79.636C94.8773 79.324 94.5893 79.12 94.2533 79.024C93.9413 78.904 93.6413 78.844 93.3533 78.844C92.6333 78.844 92.0453 79.084 91.5893 79.564C91.1333 80.044 90.9053 80.812 90.9053 81.868V87.196H95.6573V91.66H90.9053V103H85.8653Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
