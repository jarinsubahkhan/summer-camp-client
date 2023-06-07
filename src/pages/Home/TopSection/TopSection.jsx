import './TopSection.css'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const TopSection = () => {
    return (
        <div>
      <div className="carousel  w-full h-[650px]">

      <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/xH4gGVw/IMG-7066-Policies-1024x683-2x.jpg" className="w-full" />

          <div className="slide-content absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start mt-28 ms-28 justify-start text-center">
            <h2 className="slide-title text-3xl font-serif text-stone-400 mb-4">Ballroom dancing school</h2>
            <p className="slide-description text-white text-lg mb-4">-Improve your Latin technique in this fun Dance Masterclass! It <br /> is suitable for those who are new to Ballroom and are looking <br /> to gain a foundation in this dance technique. During the <br /> course of the masterclass you will refresh and refine dance <br /> steps, improve your poise and grace of movement.</p>
            <h3 className='text-stone-400 text-xl mt-4 mb-4 '>Sunday classes will skip Super Bowl Sunday (2/7) <br /> and end one week late on 2/14</h3>
            <button className="slide-button mt-7 text-sm text-white flex gap-2 justify-center uppercase"> <FaCalendarAlt className='mt-1 text-red-500'></FaCalendarAlt> class schedule <FaArrowRight className='mt-1'></FaArrowRight></button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
        </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/wzNxh1m/people-ballet-dance-couple.jpg" className="w-full" />
    <div className="slide-content absolute top-0 left-0 right-0 bottom-0 flex flex-col mt-28 ms-28 items-start justify-start text-center">
    <h2 className="slide-title text-3xl font-serif text-stone-400 mb-4">Ballroom dancing school</h2>
    <p className="slide-description text-white text-lg mb-4">-Improve your Latin technique in this fun Dance Masterclass! It <br /> is suitable for those who are new to Ballroom and are looking <br /> to gain a foundation in this dance technique. During the <br /> course of the masterclass you will refresh and refine dance <br /> steps, improve your poise and grace of movement.</p>
            <h3 className='text-stone-400 text-xl mt-4 mb-4 '>Sunday classes will skip Super Bowl Sunday (2/7) <br /> and end one week late on 2/14</h3>
            <button className="slide-button mt-7 text-sm text-white flex gap-2 justify-center uppercase"> <FaCalendarAlt className='mt-1 text-red-500'></FaCalendarAlt> class schedule <FaArrowRight className='mt-1'></FaArrowRight></button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/XVFpcFY/fcc8c2-72b0544b6c4e4d668b427c5b94f8e29c-mv2-d-5760-3840-s-4-2.jpg" className="w-full" />
    <div className="slide-content absolute top-0 left-0 right-0 bottom-0 flex flex-col mt-28 ms-28 items-start justify-start text-center">
    <h2 className="slide-title  text-3xl font-serif text-stone-400 mb-4">Ballroom dancing school</h2>
    <p className="slide-description text-white text-lg mb-4">-Improve your Latin technique in this fun Dance Masterclass! It <br /> is suitable for those who are new to Ballroom and are looking <br /> to gain a foundation in this dance technique. During the <br /> course of the masterclass you will refresh and refine dance <br /> steps, improve your poise and grace of movement.</p>
            <h3 className='text-stone-400 text-xl mt-4 mb-4 '>Sunday classes will skip Super Bowl Sunday (2/7) <br /> and end one week late on 2/14</h3>
            <button className="slide-button mt-7 text-sm text-white flex gap-2 justify-center uppercase"> <FaCalendarAlt className='mt-1 text-red-500'></FaCalendarAlt> class schedule <FaArrowRight className='mt-1'></FaArrowRight></button>
          </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/CvQh9mp/parcours-duo-contemporain-classique-ecole-premier-ballet-cddm.jpg" className="w-full" />
    <div className="slide-content absolute top-0 left-0 right-0 bottom-0 flex flex-col  mt-28 ms-28 items-start justify-start text-center">
    <h2 className="slide-title  text-3xl font-serif text-stone-400 mb-4">Ballroom dancing school</h2>
    <p className="slide-description text-white text-lg mb-4">-Improve your Latin technique in this fun Dance Masterclass! It <br /> is suitable for those who are new to Ballroom and are looking <br /> to gain a foundation in this dance technique. During the <br /> course of the masterclass you will refresh and refine dance <br /> steps, improve your poise and grace of movement.</p>
            <h3 className='text-stone-400 text-xl mt-4 mb-4 '>Sunday classes will skip Super Bowl Sunday (2/7) <br /> and end one week late on 2/14</h3>
            <button className="slide-button mt-7 text-sm text-white flex gap-2 justify-center uppercase"> <FaCalendarAlt className='mt-1 text-red-500'></FaCalendarAlt> class schedule <FaArrowRight className='mt-1'></FaArrowRight></button>
          </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>   

  
        </div>
    );
};

export default TopSection;