import React, {Component} from 'react';
import Link from "next/link";

class H1WholeTeamSection extends Component {
	render() {
		return (
			<div className="about-us-area pt-115 pb-90" style={{backgroundImage: `url(${'assets/img/bg/about.png'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 ">
							<div className="about-us-text mb-30">
                                <div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt="shape"/>
								</div>
								<h1>The Team</h1>
								<p>
								Our team is composed of individuals from different cultural backgrounds, bringing diverse perspectives and skills to the table. Present both in the UK and South Africa, we are uniquely positioned to work across the globe, connecting growers with buyers and ensuring that our clients receive the freshest produce possible. We hold ourselves to the highest standards in every aspect of our business, from sourcing to logistics to customer service. We are dedicated to providing our clients with the highest quality produce available and building lasting relationships based on trust and mutual benefit.
								</p>
								{/* <Link href="/about" as="/about" >
									<a className="btn">Learn More</a>
								</Link> */}
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className=" mb-30">
								<img src={require("../../../public/assets/img/wholeteam/pexels-diva-plavalaguna-6146696.jpg")} alt="Photo by Zen Chung: https://www.pexels.com/photo/anonymous-local-female-farmers-picking-vegetables-during-harvesting-season-in-garden-5529604/"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1WholeTeamSection;