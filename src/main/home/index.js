import React, { Component } from 'react';
import './home.css';
import avatar from "../images/avatar/profile.png";

console.log(avatar);

class HomeComponent extends Component {
  render() {
    return (
      <div className="home-flex">
        <div className="col-4 home-item">
          <br />
          <img src={avatar} height="80%" width="101%" />
          <br/>
        </div>
        <div className="col-8 home-item">
          <p>
            <br/>
            Hi ! I'm <b>Sarot Busala</b>. <br/>
            I'm aspiring to become a researcher in Computer Graphics. <br/>
            My ultimate goal is to piece through the very limit and boundary of game industry <br/>
            by developing and introducing a way humans create digital contents <br/>
            My main focus is in Inverse Rendering, but I also have interest in fields <br/>
            such as Realtime Physics Simulations, Computer Animation. <br/>
            I strongly believe digital contents in the future would be <br/>
            the thing that is inherent in humans' development and also <br/>
            a main part of how our society would become !<br/>
            <br/>
            I'm currently a 1st year master student at Chulalongkorn University. <br/>
            My plan is to continue my study on PhD abroad ! (The location has not yet decided). <br/>
            Thank you for visiting my personal site !<br/>
            <br/>
            初めまして！私は　「サロト　ブサラー」　(Sarot Busala)　と申します！<br/>
            私の目標はコンピュターグラフィックスの研究者になることです！ <br/>
            このサイトに来てくれてありがとうございました！ <br/>
          </p>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
