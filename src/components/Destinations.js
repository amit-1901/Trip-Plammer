import "./DestinationStyle.css";
import pic1 from "../assets/m21.jpg";
import pic2 from "../assets/m22.jpg";
import pic3 from "../assets/j5.jpg";
import pic4 from "../assets/j4.jpg";
import pic5 from "../assets/d1.jpg";
import pic6 from "../assets/d2.jpg";
import DestinationData from "./DestinationData";

const Destinations = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Travell Gives You Wings</p>
      <DestinationData
        classname="first-des"
        heading="Manali"
        text="Manali is one of the most beautiful tourist destinations in India. It is located in the beautiful Himalayan ranges of Himachal Pradesh and is commonly called the 'Valley of Gods'. Manali is a popular tourist destination for adventure lovers, nature lovers, and honeymooners. Here, you can explore the stunning snow-capped mountains, lush green valleys, breath-taking waterfalls, and stunning lakes. Manali is full of attractions and activities for travellers of all ages and budgets. From trekking, mountaineering, skiing, paragliding, and rafting to exploring charming villages and temples, Manali has something for everyone."
        img1={pic1}
        img2={pic2}
      />
      <DestinationData
        //  naya koi section add karna h to aise kar lo video 2:25
        classname="first-des-reverse"
        heading="Rajasthan"
        text="Rajasthan, located in northwestern India, holds the distinction of being the largest state in the country. Spanning an area of around 342,239 square kilometers. Each city has its unique color code, which adds to the charm and character of its streets. For instance, Jodhpur is famously known as the “Blue City”, The “Pink City” of Jaipur, Udaipur, the “City of Lakes”, Jaisalmer is the city that exudes shades of yellow. The majestic Kumbhalgarh Fort, situated in the Rajsamand district of Rajasthan, boasts the second-largest continuous wall after the Great Wall of China. Rajasthan is famous for the Thar Desert, also known as the Great Indian Desert"
        img1={pic3}
        img2={pic4}
      />
      <DestinationData
        classname="first-des"
        heading="Darjelling"
        text="Darjeeling is the hub of variegated flora and diverse fauna and this adds to the long list of fascinating facts about Darjeeling. One can discern over 4,000 different plants, 300 types of ferns, and a host of wildlife famous amongst which are monkeys, elephants, wild cats, and even endangered red pandas. Darjeeling Himalayan Railway is a UNESCO World Heritage Site. Also known as Toy Train, the construction of the Darjeeling Himalayan Railway began in the 1880s. You can take a picturesque train ride along the 12 stop, 54-mile route. Darjeeling is nestled between Nepal, Tibet, and Bhutan. The hills that make Darjeeling beauteous are the Himalayan Mountains."
        img1={pic5}
        img2={pic6}
      />
    </div>
  );
};

export default Destinations;
