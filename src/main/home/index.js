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
            My main focus is in researching better way to create 3D model with less effort. <br/>
	    The way we create 3D model now is quite linear and we could have done much better ! <br/>
 	    My research focus is in applying multi-view, photometric stereo and deep learning together to achieve the aforementioned goal. <br/>
	    My interest is actually in anything that could make game development becomes less costly and more enjoyable ! <br/>
	    I focus on 3D modeling, but another aspects are all important too. Whether it is in coding, modeling, animating, etc.<br/>
	    There are countless things that could be improved. <br/>
	    Many people around the world contributing are in their own way. I hope my work could somehow help ! :) <br/>
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
