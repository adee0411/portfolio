const Logo = ({ variant }) => {
  return (
    <div className="">
      {/**       <div className="relative">
        <div className="absolute w-2 h-10 bg-emerald-300 rounded-tl-full"></div>
        <div className="absolute left-3 w-3 h-4 bg-rose-400 rounded-tr-full"></div>
        <div className="absolute left-3 top-5 w-4 h-5 bg-indigo-400 rounded-br-full"></div>
      </div>*/}
      <span
        className={`text-3xl font-bold ${
          variant === "dark" ? "text-slate-700" : "text-emerald-300"
        }`}
      >
        B
      </span>
      <span
        className={`text-xl ${
          variant === "dark" ? "text-emerald-400" : "text-slate-300"
        }`}
      >
        .dev
      </span>
    </div>
  );
};

export default Logo;
