import ResponsiveIcon from "../../icons/responsive_icon.png";
import CleanCodeIcon from "../../icons/clean-code_icon.png";
import LearningIcon from "../../icons/learning_icon.png";

const Values = () => {
  return (
    <section id="values" className="my-10">
      <header className="mb-6">
        <h2>
          <span className="inline-block relative text-3xl font-bold uppercase after:block after:absolute after:top-2/4 after:-translate-y-1/2 after:-right-10 after:w-8 after:h-1 after:bg-emerald-300">
            amit nyújtok
          </span>
        </h2>
      </header>
      <div className="flex">
        <div>
          <img src={ResponsiveIcon} className="w-1/4 mx-auto mb-2" />
          <h3 className="text-center text-sm">
            Pixelpontos, reszponzív szerkezet modern UI eszközökkel
          </h3>
        </div>
        <div>
          <img src={CleanCodeIcon} className="w-1/4 mx-auto mb-2" />
          <h3 className="text-center text-sm">
            Átlátható, konzisztens kód, a "DRY"-t szem előtt tartva
          </h3>
        </div>
        <div>
          <img src={LearningIcon} className="w-1/4 mx-auto mb-2" />
          <h3 className="text-center text-sm">
            Igény a folyamatos tanulásra, fejlődésre
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Values;
