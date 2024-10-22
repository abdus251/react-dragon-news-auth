import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import bayern from '../../assets/editorsInsight1.png'
import bayern2 from '../../assets/editorsInsight2.png'
import bayern3 from '../../assets/editorsInsight3.png'
import { FaCalendarWeek } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/news");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const foundNews = data.find((item) => item._id === id);
        setNews(foundNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div>
  <Header />
  <Navbar />
  Dragon News
  <div className="grid md:grid-cols-4">
    <div className="col-span-3 border px-6 py-6 h-full">
      <img src={news.image_url} />
      <h2 className="text-xl font-bold mt-4 mb-3">{news.title}</h2>
      <p>{news.details}</p>
      <div className="flex items-center mt-auto">
        <Link to='/'><button className="flex items-center bg-red-500 text-white px-4 py-2 mt-2">
          <BiLeftArrowAlt /> All news in this category
        </button></Link>
      </div>
      <hr className="my-8" />
        <h2 className="text-2xl font-bold">Editors Insight</h2>
        <div className="flex gap-4">
        <div>
      <img className='mt-8' src={bayern} alt="" />
      <h2 className='text-xl font-bold mt-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
      <p className=' mt-4 mb-2 flex gap-4'>Sports
      <FaCalendarWeek />
       October 14, 2024</p>
       </div>
    <div className="">
      <img className='mt-8' src={bayern2} alt="" />
      <h2 className='text-xl font-bold mt-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
      <p className=' mt-4 mb-2 flex gap-4'><span className='font-bold'>Sports</span>
      <FaCalendarWeek />
       October 14, 2024</p>
    </div>
    <div className="">
      <img className='mt-8 h-32' src={bayern3} alt="" />
      <h2 className='text-xl font-bold mt-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
      <p className=' mt-4 mb-2 flex gap-4'>Sports
      <FaCalendarWeek />
       October 14, 2024</p>
    </div>
    </div>  
    </div>

    <div>
       {/* Q ZONE */}
       <div className="p-4 w-10/12  ml-4 space-y-3 mb-6 bg-base-200">
        <h2 className="text-3xl">Q-Zone </h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  </div>
</div>
  );
};

export default News;
