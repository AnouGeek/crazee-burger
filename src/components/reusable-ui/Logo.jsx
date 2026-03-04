export default function Logo() {
  return (
    <div className="flex items-center transform scale-[2.5] border">
      <h1 className="text-[36px] leading-[1em] font-bold uppercase tracking-[1.5px] text-[#ffa01b] font-amatic">
        CRAZEE
      </h1>

      <img
        src="/images/logo-orange.png"
        alt="logo-crazee-burger"
        className="object-contain h-[60px] w-[80px] mx-[5px]"
      />

      <h1 className="text-[36px] leading-[1em] font-bold uppercase tracking-[1.5px] text-[#ffa01b] font-amatic">
        BURGER
      </h1>
    </div>
  );
}
