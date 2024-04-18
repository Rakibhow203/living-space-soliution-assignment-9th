
import CuriousMindsWantToKnow from "../CuriousMindsWantToKnow/CuriousMindsWantToKnow";
import Properties from "../Properties/Properties";
import RaveReviews from "../RaveReviews/RaveReviews";
import SliderSwiper from "../Slider/SliderSwiper";


const Home = () => {
  return (
    <div>
      
      <SliderSwiper></SliderSwiper>
      <Properties></Properties>
      <RaveReviews></RaveReviews>
      <CuriousMindsWantToKnow></CuriousMindsWantToKnow>

    </div>
  );
};

export default Home;