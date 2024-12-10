import "./TripStyle.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-img">
        <img src={props.image} alt="update karo" />
      </div>
      <h4> {props.heading} </h4>
      <p> {props.text} </p>
    </div>
  );
}

export default TripData;
