import bottle from "../../assets/images/bottle.png";

function HeroBottle() {
  return (
    <div className="relative flex w-full items-center justify-center">

      {/* Golden Glow */}
      <div
        className="
          absolute
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#C89B3C]/25
          blur-[90px]

          sm:h-[280px]
          sm:w-[280px]

          md:h-[330px]
          md:w-[330px]

          lg:h-[380px]
          lg:w-[380px]

          xl:h-[430px]
          xl:w-[430px]
        "
      />

      {/* Bottle */}
      <img
        src={bottle}
        alt="Black Oak Premium Bottle"
        draggable="false"
        className="
          relative
          z-10
          select-none
          object-contain
          drop-shadow-[0_30px_60px_rgba(0,0,0,.6)]

          w-[170px]

          sm:w-[220px]

          md:w-[270px]

          lg:w-[360px]

          xl:w-[430px]

          2xl:w-[500px]

          animate-bottle
        "
      />

      {/* Bottom Reflection */}
      <div
        className="
          absolute
          bottom-2
          h-6
          w-36
          rounded-full
          bg-[#C89B3C]/25
          blur-2xl

          sm:w-44

          md:w-52

          lg:w-60

          xl:w-72
        "
      />

    </div>
  );
}

export default HeroBottle;