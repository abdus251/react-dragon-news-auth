import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    _id,
    image_url,
    author,
    rating,
    total_view
  } = news;
  return (
    <div>
      {" "}
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            {" "}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/475KSW2/salam-circle.png"
                />
              </div>
            </div>
          </a>
          <div> 
          <p className="font-bold"> {author.name} <br /> </p>
          <p> {author.published_date}</p>
          </div>
        </div>
        <div className="flex-none h-16">
          <div className="dropdown dropdown-end">
            <div>
              <div className="indicator gap-4 pr-8">
               <FaRegBookmark className="h-6 w-6"/>
               <FaShareAlt className="h-6 w-6"/> 
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-base-100  mb-16 px-4 border">
  <figure>
    {" "}
    <h2 className="text-xl font-bold py-6">{title}</h2>
    <img className="" src={image_url} alt="" />
  </figure>
  <div className="py-6">
    <p>
      {details.length > 200 ? (
        <p>
          {details.slice(0, 200)}....{" "}
          <Link to={`/news/${_id}`} className="text-orange-400 font-bold">
            <br />
            Read More
          </Link>
          <hr className="my-4" />
        </p>
      ) : (
        <p>{details}</p>
      )}
      <p className="flex items-center gap-3">
      <Rating
      className=""
      style={{ maxWidth: 180 }} 
      value={rating.number}
      readOnly
      />
      {rating.number}
      <FaRegEye className="ml-24 h-8 w-8"/> {total_view}
      </p>
    </p>
  </div>
</div>
    </div>
  );
};

export default NewsCard;
