import "./TripStyle.css";
import TripData from "./TripData";
import trip1 from "../assets/r4.jpg";
import trip2 from "../assets/Bar.jpg";
import trip3 from "../assets/n2.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trip</h1>
      <p>You can discover your trip with us</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip In Rishikesh"
          text="Rishikesh is a religious area that is a tehsil in the Dehradun District, Uttarakhand’s capital. The city is located in northern India, at the foothills of the Himalayas. It is a remarkable location that accurately portrays Indian culture and values in the lives of all Indians. Rishikesh reconnects Indians with their origins and recalls the rich history of Indian preaching. It is densely packed with temples such as Swargashram, Parmarth Ashram, and many others. This location is also known as the “Yoga Capital of the World” due to the abundance of yoga hubs. Rishikesh’s yoga legacy is immaculate. The city attracts tourists and visitors since it is widely thought that meditating will bring one closer to the stage of Attainment of Moksha after having a dip in the Ganges. Rishikesh has India's highest bungee jumping at 83 m (272 ft) over a rocky cliff."
        />
        <TripData
          image={trip2}
          heading="Trip In Barsana"
          text="Barsana is a historical town and nagar panchayat in the Mathura district of the state of Uttar Pradesh, India. 
          Barsana is the place of sweet pastimes of Shri Radharani. Barsana, a name synonymous with love and devotion, is revered as the birthplace of Sri Radha Rani, the beloved consort of Lord Krishna. Here, the air vibrates with the legendary tale of Radha Rani and Lord Krishna. The divine nectar is raining continuously here, hence it is called 'Barsana. The town holds cultural and religious significance as the birthplace of Hindu goddess Radha, the chief consort of Krishna. Barsana is situated in the Braj region. The main attraction of the town is the historical Radha Rani Temple which attracts huge number of devotees throughout the year. Barsana is famous for the grand Holi festival, known as the Lathmar Holi."
        />
        <TripData
          image={trip3}
          heading="Trip In Nanital"
          text="Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state. It is also known for the revered Naina Devi temple, which stands on the edge of the lake. Nainital is called the Lake District of India, just like Cumbrian in Britain. There are many freshwater lakes here like- Bhimtal, Sattal, Khuraptal and Naukuchiya Tal. Mall roads are famous in hill stations. The Nainital mall road, on the other hand, the Nainital mall road is remarkable because it comprises not one but two of them. Tallital and Mallital are typically unknown to outsiders. Talli means lower in the native Kumaoni language, and Malli means higher. Its sounds funny but its true. Due to the lake on its northern end, it rains almost every afternoon in Nainital. Nainital as well as Uttarakhand is an example of religious harmony. It is an example of the ancient Indian traditions."
        />
      </div>
    </div>
  );
}

export default Trip;
