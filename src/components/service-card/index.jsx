import PropTypes from "prop-types";

export default function Card({ card, index }) {
  return (
    <div key={index} className="w-full bg-white shadow  border p-2">
      <img className="px-2 pt-2 w-full" src={card.imageURL} alt="" />
      <div className="px-2 h-10 w-full flex flex-row">
        {card.svg}
        <h5 className="pl-2 w-full flex items-center font-bold bg-primary text-white tracking-tight">
          {card.title}
        </h5>
      </div>
      <div className="px-2 pb-2">
        <p className="p-3 font-normal bg-bgLight text-lightGray text-md ">
          {card.description}
        </p>
      </div>
    </div>
  );
}
Card.propTypes = {
  index: PropTypes.number.isRequired, // Require index as a number
  card: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    svg: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
