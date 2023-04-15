import React, {Component} from 'react';
import Link from "next/link";

class H1AboutSection extends Component {
	render() {
		return (
			<div className="about-us-area pt-115 pb-90" style={{backgroundImage: `url(${'assets/img/bg/about.png'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="about-us-img mb-30">
								<img src={require("../../../public/assets/img/about/pexels-zen-chung.jpg")} alt="Photo by Zen Chung: https://www.pexels.com/photo/anonymous-local-female-farmers-picking-vegetables-during-harvesting-season-in-garden-5529604/"/>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 ">
							<div className="about-us-text mb-30">
								<h1>Introducing <br/> Copper Sunset</h1>
								<span>fresh fruit and vegetables</span>
								<p>
								Welcome to our website! We are a fresh fruit and vegetable export company based in South Africa. Our mission is to provide our customers with high-quality produce that meets their demands while maintaining the highest quality standards. With well-established connections to local farmers and suppliers, we offer a wide range of fresh fruits and vegetables to meet your needs. We are dedicated to providing efficient and reliable service to our customers and strive to exceed their expectations. Thank you for considering us as your fresh produce supplier.
								</p>
								{/* <Link href="/about" as="/about" >
									<a className="btn">Learn More</a>
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1AboutSection;