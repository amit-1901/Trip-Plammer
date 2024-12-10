import { Component } from "react";
import "./DestinationStyle.css";

// import pic1 from "../assets/3.jpg";
// import pic2 from "../assets/4.jpg";
// import pic3 from "../assets/5.jpg";
// import pic4 from "../assets/6.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.classname}>
        <div className="des-txt">
          <h2> {this.props.heading} </h2>
          <p> {this.props.text} </p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="update karo" />
          <img src={this.props.img2} alt="update karo" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
