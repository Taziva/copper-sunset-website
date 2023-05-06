import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';

class ProductSection extends Component {
  render() {
    return (
      <div id="products" className="product-area pos-relative pt-110 pb-85 fix">
        <div className="shape spahe1 bounce-animate">
          <img src={require('../../../../public/assets/img/shape/shape1.png')} alt="shape" />
        </div>
        <div className="shape spahe2 bounce-animate">
          <img src={require('../../../../public/assets/img/shape/shape2.png')} alt="shape" />
        </div>
        <div className="shape spahe3 bounce-animate">
          <img src={require('../../../../public/assets/img/shape/shape3.png')} alt="shape" />
        </div>
        <div className="shape spahe4 bounce-animate">
          <img src={require('../../../../public/assets/img/shape/shape4.png')} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center section-circle mb-70">
                <div className="section-img">
                  <img src={require('../../../../public/assets/img/shape/1.png')} alt="" />
                </div>
                <h1>Products</h1>
                <p>
                  Our product line offers a diverse selection of fresh fruits and vegetables,
                  carefully selected from our farms in South Africa and other global partners. We
                  take pride in our commitment to quality and freshness, and strive to provide our
                  customers with the best produce available.
                </p>
              </div>
            </div>
          </div>
          <Tabs className="row" selectedTabClassName="active">
            <div className="col-xl-12">
              <TabList className="nav product-tab justify-content-center mb-75">
                <Tab className="nav-item">
                  <div className="product-tab-content text-center">
                    <div className="product-tab-img">
                      <i className="flaticon-tomato"></i>
                    </div>
                    <h4>Vegetables</h4>
                  </div>
                </Tab>
                <Tab className="nav-item">
                  <div className="product-tab-content text-center">
                    <div className="product-tab-img">
                      <i className="flaticon-fruit"></i>
                    </div>
                    <h4>Fruits</h4>
                  </div>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-pixabay-533280.jpg')}
                          alt="Photo by Pixabay: https://www.pexels.com/photo/abundance-agriculture-fresh-healthy-533280/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                            <img
                          src={require('../../../../public/assets/img/product/pexels-pixabay-533280.jpg')}
                          alt="Photo by Pixabay: https://www.pexels.com/photo/abundance-agriculture-fresh-healthy-533280/"
                        />
                          </a>
                        </Link> */}

                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Tomatoes
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Tomatoes</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$49.99</span>
												</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-ellie-burgin-3375263.jpg')}
                          alt="Photo by Ellie Burgin from Pexels: https://www.pexels.com/photo/green-vegetables-3375263/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                            <img
                          src={require('../../../../public/assets/img/product/pexels-ellie-burgin-3375263.jpg')}
                          alt="Photo by Ellie Burgin from Pexels: https://www.pexels.com/photo/green-vegetables-3375263/"
                        />
                          </a>
                        </Link> */}
                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Zucchini
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Zucchini</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                        </div>
                        <div className="pro-price">
                          <span>$29.99</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-nick-collins-1274614.jpg')}
                          alt="Photo by Nick Collins from Pexels: https://www.pexels.com/photo/shallow-focus-photography-of-yellow-and-red-bell-peppers-in-basket-1274613/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                            <img
                          src={require('../../../../public/assets/img/product/pexels-nick-collins-1274614.jpg')}
                          alt="Photo by Nick Collins from Pexels: https://www.pexels.com/photo/shallow-focus-photography-of-yellow-and-red-bell-peppers-in-basket-1274613/"
                        />
                          </a>
                        </Link> */}
                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Peppers
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Peppers</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                        </div>
                        <div className="pro-price">
                          <span>$25.99</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-daniel-dan-7543157.jpg')}
                          alt="Photo by Daniel Dan from Pexels: https://www.pexels.com/photo/close-up-shot-of-cucumbers-7543157/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                           <img
                          src={require('../../../../public/assets/img/product/pexels-daniel-dan-7543157.jpg')}
                          alt="Photo by Daniel Dan from Pexels: https://www.pexels.com/photo/close-up-shot-of-cucumbers-7543157/"
                        />
                          </a>
                        </Link> */}
                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Cucumbers
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Cucumbers</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                        </div>
                        <div className="pro-price">
                          <span>$49.99</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-kelly-2539177.jpg')}
                          alt="Photo by Kelly from Pexels: https://www.pexels.com/photo/close-up-photo-of-blueberries-2539177/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                            <img
                          src={require('../../../../public/assets/img/product/pexels-kelly-2539177.jpg')}
                          alt="Photo by Kelly from Pexels: https://www.pexels.com/photo/close-up-photo-of-blueberries-2539177/"
                        />
                          </a>
                        </Link> */}
                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Blueberries
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Blueberries</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                        </div>
                        <div className="pro-price">
                          <span>$49.99</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-julie-aagaard-2294477.jpg')}
                          alt="Photo by julie aagaard from Pexels: https://www.pexels.com/photo/photo-of-pile-of-oranges-2294477/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                             <img
                          src={require('../../../../public/assets/img/product/pexels-julie-aagaard-2294477.jpg')}
                          alt="Photo by julie aagaard from Pexels: https://www.pexels.com/photo/photo-of-pile-of-oranges-2294477/"
                        />
                          </a>
                        </Link> */}

                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Oranges
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Oranges</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                        </div>
                        <div className="pro-price">
                          <span>$49.99</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-valerie-b-3029520.jpg')}
                          alt="Photo by Valerie B. from Pexels: https://www.pexels.com/photo/pile-of-avocado-fruits-3029520/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                            <img
                              src={require('../../../../public/assets/img/product/pexels-valerie-b-3029520.jpg')}
                              alt="Photo by Valerie B. from Pexels: https://www.pexels.com/photo/pile-of-avocado-fruits-3029520/"
                            />
                          </a>
                        </Link> */}
                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Avocados
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Avocados</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                        </div>
                        <div className="pro-price">
                          <span>$29.99</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="product-wrapper text-center mb-30">
                      <div className="product-img">
                        <img
                          src={require('../../../../public/assets/img/product/pexels-consuelo-borroni-15221058.jpg')}
                          alt="Photo by Consuelo Borroni from Pexels: https://www.pexels.com/photo/red-fruits-in-close-up-shot-15221058/"
                        />
                        {/* <Link href="/shop-details" as="/shop-details">
                          <a>
                            <img
                              src={require('../../../../public/assets/img/product/pexels-consuelo-borroni-15221058.jpg')}
                              alt="Photo by Consuelo Borroni from Pexels: https://www.pexels.com/photo/red-fruits-in-close-up-shot-15221058/"
                            />
                          </a>
                        </Link> */}
                        {/* <div className="product-action">
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'heart']} />
                            </i>
                          </a>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={['fas', 'search']} />
                            </i>
                          </a>
                        </div> */}
                      </div>
                      <div className="product-text">
                        <h4>
                          Lychees
                          {/* <Link href="/shop-details" as="/shop-details">
                            <a>Lychees</a>
                          </Link> */}
                        </h4>
                        {/* <div className="pro-rating">
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                          <i>
                            <FontAwesomeIcon icon={['far', 'star']} />
                          </i>
                        </div>
                        <div className="pro-price">
                          <span>$25.99</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* <TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product3.png")} alt="image"/></a>
												</Link>
												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Breadfruit Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$25.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product4.png")} alt="image"/></a>
												</Link>
												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Blackberries Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$49.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product1.png")} alt="product"/></a>
												</Link>

												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Broccoli Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$49.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product2.png")} alt="image"/></a>
												</Link>
												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Avocado Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$29.99</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product1.png")} alt="product"/></a>
												</Link>

												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Broccoli Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$49.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product3.png")} alt="image"/></a>
												</Link>
												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Breadfruit Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$25.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product4.png")} alt="image"/></a>
												</Link>
												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Blackberries Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$49.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product2.png")} alt="image"/></a>
												</Link>
												<div className="product-action">
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href="/shop-details" as="/shop-details" >
														<a>Avocado Head</a>
													</Link>
												</h4>
												<div className="pro-rating">
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
													<i><FontAwesomeIcon icon={['far', 'star']} /></i>
												</div>
												<div className="pro-price">
													<span>$29.99</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel> */}
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ProductSection;
