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
	    == Update 2024 (TGS) ==
            Hi ! I'm <b>Sarot Busala</b>. <br/>
            I'm a Computer Graphics Engineer & Game developer working both in a solo and team setup. <br/>
            I also make 3D models as a technical artist.<br/>
	    An indie game developer, like everyone maybe familiar with, covering everything from technical coding to artistic design. <br/>
	    I will put the info of my solo released / up-coming games later.
	    For the team-based projects, I am with a small team of indie game developers from Thailand based in Bangkok.
	    Wish to announce our up-and-coming project soon !
	    Please look forward and feel free to give feedbacks when the time comes !
	    
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
