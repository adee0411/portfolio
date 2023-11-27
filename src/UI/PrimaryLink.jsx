import { Link } from "react-router-dom";

const PrimaryLink = ({ path, title, reloadDocument, extraClasses }) => {
  return (
    <Link
      to={path}
      reloadDocument
      className={`text-center bg-emerald-300 text-slate-900 border border-emerald-300 rounded-md hover:bg-transparent hover:text-emerald-300 transition ${extraClasses}`}
    >
      {title}
    </Link>
  );
};

export default PrimaryLink;
