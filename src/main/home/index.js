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
            Hi ! I'm <b>Sarot Busala</b>, a mere mortal trying to be a researcher in Computer Graphics. <br/>
            Thank you for visiting my site !<br/>
            <br/>
            初めまして！僕は　「サロト　ブサラー」　(Sarot Busala)　と申します！<br/>
            僕の目標はコンピュターグラフィックスの研究者になります！ <br/>
            このサイトに来てくれてありがとうございます！ <br/>
          </p>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
