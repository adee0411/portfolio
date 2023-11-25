const StackCard = ({ icon, stackName }) => {
  return (
    <li className="text-sm font-light">
      <figure className="flex flex-col gap-2 justify-center align-middle mb-2">
        <img src={icon} className="block mx-auto w-8" />
        <figcaption className="text-center text-slate-400">
          {stackName}
        </figcaption>
      </figure>
    </li>
  );
};

export default StackCard;
