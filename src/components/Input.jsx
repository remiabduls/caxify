import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default class PhoneInputGfg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
  }
  render() {
    return (
      <div>
        <h5 style={{ marginRight: "490px", marginBottom: "5px" }}>
          Phone Number
        </h5>
        <PhoneInput
          country={"ng"}
          value={this.state.phone}
          onChange={(phone) => this.setState({ phone })}
          onChange={this.handleOnChange}
          // Set your inline styles here
          containerStyle={{ marginBottom: "10px" }}
          inputStyle={{
            width: "680px",
            fontSize: "17px",
            height: "60px",
            borderRadius: "10px",
            border: "1px solid #9CA3AF",
          }}
          required
        />
      </div>
    );
  }
}
