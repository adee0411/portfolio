import { motion } from "framer-motion";

import ResponsiveIcon from "../../icons/responsive_icon.png";
import CleanCodeIcon from "../../icons/clean-code_icon.png";
import LearningIcon from "../../icons/learning_icon.png";

import SectionWrapper from "../../UI/SectionWrapper";

const Values = () => {
  return (
    <SectionWrapper sectionID="values" sectionTitle="Amit nyújtok">
      <motion.div className="flex">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring" }}
          animate="visible"
          key={0}
        >
          <img src={ResponsiveIcon} className="w-1/4 mx-auto mb-2" />
          <h3 className="text-center text-sm">
            Pixelpontos, reszponzív szerkezet modern UI eszközökkel
          </h3>
        </motion.div>
        <motion.div>
          <img src={CleanCodeIcon} className="w-1/4 mx-auto mb-2" />
          <h3 className="text-center text-sm">
            Átlátható, konzisztens kód, a "DRY"-t szem előtt tartva
          </h3>
        </motion.div>
        <motion.div>
          <img src={LearningIcon} className="w-1/4 mx-auto mb-2" />
          <h3 className="text-center text-sm">
            Igény a folyamatos tanulásra, fejlődésre
          </h3>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Values;
