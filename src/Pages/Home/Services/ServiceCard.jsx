import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const { title, img, price} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-500 text-base flex justify-between">Price: ${price} <Link className="link link-hover "> <FaArrowRight></FaArrowRight></Link></p>
        {/* <div className="card-actions justify-end">
          <Link className="link link-hover "> <FaArrowRight></FaArrowRight></Link>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
