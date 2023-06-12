
import './Extra.css'; // Add your custom styles here
import { keyframes } from "@emotion/react";
import { Fade, Reveal } from "react-awesome-reveal";
import { FaArrowRight } from 'react-icons/fa';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


const Extra = () => {
    return (
       <Reveal keyframes={customAnimation}>
<Fade direction="left">

<div>
        <div className="hero w-full h-[500px]" style={{ backgroundImage: `url("https://i.ibb.co/Vg8wdfG/1251318.webp")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="sm:w-1/2 lg:w-full px-12">

     <div className='flex gap-28'>

      <div className='border border-red-300 p-6'>
      <h5 className="mb-5 text-2xl text-red-300 font-bold">STYLES</h5>
      <ul className='font-semibold text-stone-300'>
        <li>Bachata</li>
        <li>East Coast Swing</li>
        <li>Kizomba</li>
        <li>Lindy Hop</li>
        <li>Salsa</li>
        <li>Tango</li>
        <li>Tap</li>
        <li>Waltz</li>
        <li>West Coast Swing</li>
      </ul>
      </div>

<div>
  <h1 className='font-bold text-red-300 my-6'>OUR PHILOSOPHY</h1>
  <p className="mb-5 text-stone-400 font-medium">Our school was found in 1997 o promote social dancing of all kinds.Our community of instructors, staff and clients welcome and encourage any  and everyone to come out dancing.</p>
  <div className='flex gap-8 mt-12'>

<div>
<h4 className='text-red-300 font-serif'>Top trainers -------</h4>
<p className='font-semibold text-stone-300 mb-4'><small>Te entire coaching staff has university degrees on a profile sports ballroom dancing,physical education and sport.</small></p>
<button className='font-bold text-red-300'>MEET OUR TRAINERS <FaArrowRight className='mt-1'></FaArrowRight></button>
</div>

<div>
<h4 className='text-red-300 font-serif'>High results ------</h4>
<p className='font-semibold text-stone-300 mb-4'><small>1996 brought more than 20 mastes of sports,sports master candidates, and more than 100 atlates of level I, II, III.</small></p>
<button className='font-bold text-red-300'>VIEW OUR RESULTS <FaArrowRight className='mt-1'></FaArrowRight></button>
</div>

  </div>
</div>

     </div>

    </div>
  </div>
</div>
     </div>
</Fade>


       </Reveal>

  
      
    );
};

export default Extra;