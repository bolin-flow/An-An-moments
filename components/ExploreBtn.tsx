// "use client"; for the moment we don't use any client side feature
import Image from "next/image";
const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      // onClick={() => console.log("CLICKed")}
    >
      <a href="#events">
        Explore Moments
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={24}
          height={24}
        />
      </a>
    </button>
    
  );
};

export default ExploreBtn;
