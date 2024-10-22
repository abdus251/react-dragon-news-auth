import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-base-200 my-8 mr-2">
      <span className="bg-base-200 pl-2 pt-2 pb-2 h-16"><button className="btn bg-red-500 rounded-none text-white text-xl">Latest </button></span>
      <Marquee className="font-bold" pauseOnHover={true} speed={100}>
        <Link className="mr-12 " to='/'>
          I can be a React component, multiple React components....
        </Link>
        <Link className="mr-12" to='/'>
          I can be a React component, multiple React components....
        </Link>
        <Link className="mr-12" to='/'>
          I can be a React component, multiple React components....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
