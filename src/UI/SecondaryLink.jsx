import { Link } from "react-router-dom";

const SecondaryLink = ({ path, title, reloadDocument, extraClasses }) => {
  return (
    <Link
      to={path}
      reloadDocument
      className={`text-center bg-transparent border border-emerald-300 text-emerald-300 rounded-md ${extraClasses}`}
    >
      {title}
    </Link>
  );
};

export default SecondaryLink;
