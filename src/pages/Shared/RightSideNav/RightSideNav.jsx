import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import newsPaper from '../../../assets/bg.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6 -mt-4">
        <h2 className="text-2xl font-bold">Login with</h2>
      
        <button className="btn btn-outline border-blue-400 w-full">
         <FaGoogle className="text-blue-400"></FaGoogle>
         <p className="text-blue-400">
          Login with Google</p>
        </button>
        
        <button className="btn btn-outline w-full">
         <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-2xl font-bold mb-4">Find Us on</h2>
       <a className="p-4 flex mr-2 text-lg items-center border rounded-t-lg" href="">
        <FaFacebook className="mr-3"></FaFacebook> <span>Facebook</span>
       </a>

       <a className="p-4 flex mr-2 text-lg items-center border-x" href="">
        <FaTwitter className="mr-3"></FaTwitter> <span>Twiteer</span>
       </a>
       <a className="p-4 flex mr-2 text-lg items-center border rounded-b-lg" href="">
        <FaInstagram className="mr-3"></FaInstagram> <span>Instagram</span>
       </a>
      </div>
      {/* Q ZONE */}
      <div className="p-4 w-10/12  ml-4 space-y-3 mb-6 bg-base-200">
        <h2 className="text-3xl">Q-Zone </h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className="w-10/12  ml-4 px-8 pt-14" style={{backgroundImage: `url(${newsPaper})`}}>
        <h2 className="text-2xl text-white ">Create an Amazing Newspaper</h2>
        <p className="text-sm text-white pt-6">Discover thousands of options, easy to <br /> customize layouts, one-click to import demo and much more.</p>
        <button className="bg-red-500 p-4 text-white ml-4 mt-6 mb-12 font-bold">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNav;
