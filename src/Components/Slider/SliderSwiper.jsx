// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';


import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
import './swiper.css';


const SliderSwiper = () => {
  return (
    <div className='mt-10'>
        <div>
      {/* <div className="absolute -mr-9">
        <h3 className="text-bold">Our property</h3>
      </div> */}
        <Swiper
        
        className="h-3/4 relative rounded-3xl md:h-96vh"
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          
          
      >
          <div >
            
            <div>

            <SwiperSlide className='flex justify-center text-center font-bold bg-slate-400 items-center 
          '>
              
                <div className='slide slide1'>
                  
                  <h1 className='text-white text-3xl  lg:mb-36 md:text-bold md:mb-10'> Make Your dream home  with <br /> <span className='text-[#66c6e3]'>Living Space Solution</span>

<div><button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">GET A QUOTE</button></div>

                  </h1>
   
            </div>
              
              
            </SwiperSlide>
            
</div>
          <SwiperSlide className='flex justify-center text-center font-bold bg-slate-400 items-center
          '>
              
            
              
<div className='slide slide2'>
                  
     <h1 className =' text-3xl  text-[#000000] lg:mb-36 md:text-bold md:mb-10'> Beautiful House In Australia <br />  Make Your dream home  with <br /> <span className='text-[rgba(36,118,63,0.97)]'>Living Space Solution</span>

<div><button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">GET A QUOTE</button></div>

                  </h1>

            </div>

          </SwiperSlide>
          <SwiperSlide className='flex justify-center text-center font-bold bg-slate-400 items-center'>
            
              

<div className='slide slide3'>
                  
<h1 className =' text-3xl  text-[#f0f3f5] lg:mb-36 md:text-bold md:mb-10'> Beautiful House In Canberra <br />  Make Your dream home  with <br /> <span className='text-[rgba(97,250,148,0.97)]'>Living Space Solution</span>

<div><button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">GET A QUOTE</button></div>

                  </h1>

            </div>

          </SwiperSlide>
            <SwiperSlide className='flex justify-center text-center font-bold bg-slate-400 items-center '>
      
            
              
<div className='slide slide4'>
                  
<h1 className =' text-3xl  text-[#f6f8fa] lg:mb-36 md:text-bold md:mb-10'> Beautiful House In Melbourne  <br />  Make Your dream home  with <br /> <span className='text-[rgba(97,250,148,0.97)]'>Living Space Solution</span>

<div><button className=" mb-10 justify-center items-center btn btn-active  bg-[#345217]  mt-5 text-xl text-white">GET A QUOTE</button></div>

                  </h1>

            </div>

          </SwiperSlide>
        </div>
      </Swiper>
    </div>


    </div>
  );
};

export default SliderSwiper;