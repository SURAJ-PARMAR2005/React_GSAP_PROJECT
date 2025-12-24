import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import assets from "../assets/asset";

const Agents = () => {

gsap.registerPlugin(ScrollTrigger)
const imageDivRef = useRef(null);

const imageRef = useRef(null);

const imageArray = [
 assets.image1,
 assets.image2,
 assets.image3,
 assets.image4,
 assets.image5,
 assets.image6,
 assets.image7,
 assets.image8
]

useGSAP(() => {
  gsap.to(imageDivRef.current,{

    scrollTrigger:{
      trigger:imageDivRef.current,
      markers:false,
      start:"top 20.5%",
      end:'top -190%',
      pin : true,
      onUpdate: function(elem){
        let imageIdx;
        if(elem.progress<1) {
          imageIdx = Math.floor(elem.progress * imageArray.length);
        }
        else{
         imageIdx = imageArray.length-1; 
        }
        imageRef.current.src = imageArray[imageIdx];
      }
    }
  })
})

  return (
    <div>
    <div className="section1 relative py-1">
      <div ref={imageDivRef} className=" overflow-hidden h-[22vw] w-[16vw] rounded-3xl top-29 absolute left-[30.5%]">
        <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className="relative" >
      <div className=" mt-[53vh]" >
        <h1 className="text-[19vw] uppercase text-center  font-semibold leading-[16vw]">Sixty-seventh Twelve</h1>
      </div>
      <div className="pl-[40%] mt-2">
        <p className="text-5xl font-semibold"> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a history. If we forget that, we might achieve good short-term results, but we'll kill it in the long run. That's why we're committed to providing perspective, to building influential brands.</p>
      </div>
    </div>
    </div>
    <div className="section2 h-screen">
    </div>
    </div>
  );
};

export default Agents;
