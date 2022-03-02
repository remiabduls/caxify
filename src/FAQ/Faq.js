import React, { Component } from "react";
import ReactDOM from "react-dom";
import Faq from "react-faq-component";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Faq.css";
import FaqHeader from "../FaqHeader/FaqHeader";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "what is CARXIFY?",
      content:
        "illo.mx is a nft marketplace dapp running on the tao blockchain."
    },
    {
      title: "what is carxify?",
      content:
        "illo.mx is currently in public aplha and much about it is subject to change. please do not use it for more than testing and amusement for now."
    },
    {
      title: "how is carxify",
      content: "tao is a smaller EVM compatible blockchain."
    }
  ]
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentPaddingBottom: "20px",
  rowContentPaddingLeft: "20px",
  rowContentPaddingRight: "20px",
 
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <FaqHeader/>
        <div class="px-5 md:px-64 lg:px-96 ">
          <Faq data={data} styles={styles} config={config} />
        </div>
        <div className="faq-footer">
        <Footer/></div>
      </div>
    );
  }
}