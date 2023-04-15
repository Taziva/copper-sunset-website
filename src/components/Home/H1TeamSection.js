import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class H1TeamSection extends Component {
	render() {
		return (
			<div className="team-area pb-90 pos-relative pt-110">
				<div className="shape sp1 bounce-animate">
					<img src={require("../../../public/assets/img/shape/sp2.png")} alt="shape"/>
				</div>
				<div className="shape sp2 bounce-animate">
					<img src={require("../../../public/assets/img/shape/sp1.png")} alt="shape"/>
				</div>
				<div className="shape sp3 bounce-animate">
					<img src={require("../../../public/assets/img/shape/sp3.png")} alt="shape"/>
				</div>
				<div className="shape sp4 bounce-animate">
					<img src={require("../../../public/assets/img/shape/sp4.png")} alt="shape"/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt="shape"/>
								</div>
								<h1>The Team</h1>
								<p>
									Our team is composed of skilled professionals based in both the UK and South Africa, each bringing a unique set of expertise and experience to help supply our clients with the highest quality fruits and vegetables.								</p>
							</div>
						</div>
					</div>
					<div className="row">
					<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="team-wrapper text-center mb-30">
								<div className="team-img">
									<img src={require("../../../public/assets/img/team/3.jpg")} alt="shape"/>
									<div className="team-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
								<div className="team-text">
									<h4>Tendaivanhu Madzikanda</h4>
									<span>Managing Director</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="team-wrapper text-center mb-30">
								<div className="team-img">
									<img src={require("../../../public/assets/img/team/1.jpg")} alt="shape"/>
									<div className="team-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
								<div className="team-text">
									<h4>Taka Simba Madzikanda</h4>
									<span>Global Operations Manager</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="team-wrapper text-center mb-30">
								<div className="team-img">
									<img src={require("../../../public/assets/img/team/2.jpg")} alt="shape"/>
									<div className="team-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
								<div className="team-text">
									<h4>Shoniwa Marovatsanga</h4>
									<span>UK Operations Manager</span>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default H1TeamSection;