import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home" style={{ backgroundImage: "url('https://images.wsj.net/im-723079/social')",}}>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width" style={{ color:"white", fontSize:"100px" }}>
                        Welcome to University
                      </h1>
                      <div>
                      <a className="about-link-1" href="RegisterForm" target="_blank" style={{ padding:"1rem" }}>
                        Sign In
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Who Are We?</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                      The University of Mumbai is one of the oldest and premier Universities in India.
                      It was established in 1857 consequent upon “Wood’s Education Dispatch”, and it is one amongst the first three Universities in India. As a sequel to the change in the name of the city from Bombay to Mumbai, the name of the University has been changed from “University of Bombay” to “University of Mumbai”, vide notification issued by the Government of Maharashtra and published in the Government Gazette dated 4th September, 1996.The University was accorded 5 
                      star status in 2001 & ‘A’ grade status in April 2012 by the National Assessment and Accreditation Council (NAAC).
                      </p>
                    </div>
                  </div>
                </div>

              
                <h1 style={{ padding:"10px" }}>Features</h1>
                <div className="underline1"></div>
                <div className="underline2"></div>
                <div className="row love-row text-center wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Impeccable Placements</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Choose To Be Placed Before You Graduate Through Our Lucrative Career Opportunities</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3> Enriching International Exchange Programs</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Provides Enriching International Exchange Programs</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Accrediationss & Tie ups</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Recognized by the University Grants Commission India.</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>Colleges and organisations</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>More than 100+ colleges under MU</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="https://mnlumumbai.edu.in/images/VC%20Sir2.JPG"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Words from our VP</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                      Professor D. T. Shirke, the Ag. Vice-Chancellor of University of Mumbai, completed his graduation from Vivekanand College, Kolhapur (1985) and Post-graduation from Department of Statistics, Shivaji University, Kolhapur (1987). He joined the Department of Statistics as a CSIR research fellow in 1987, where, subsequently, he joined Department of Statistics in 1990 and headed the
                       Department of Statistics from 2005 to 2015. He has around 30 years of teaching and 35 years of research experience.{" "}
                      </p>
                      <a
                        className="about-link-1" href="#contact">
                        Contact 
                      </a>
                      <a className="about-link-2" href="Registerform">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Service List</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmuGTznvp9Pq1EloBED2ALEvfjyEeJ9QxgQ&usqp=CAU"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-edit service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Development</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Lorem ipsum dolor sit amet, nec contentiones reprehendunt ad. Aperiam imperdiet patrioque mei ex, ea nec falli conceptam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://images.news18.com/ibnlive/uploads/2021/08/1628589585_mumbaiuniversity-1200x800.jpg"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-cart-plus exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Commerce</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Lorem ipsuntiones reprehendunt ad. Aperiam imperdiet patrioque mei ex, ea nec falli conceptam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmuGTznvp9Pq1EloBED2ALEvfjyEeJ9QxgQ&usqp=CAU"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-tachometer service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Analytics</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Lorem ipsum dolor sit amet, nec contentiones reprehendunt ad. Aperiam imperdiet patrioque mei ex, ea nec falli conceptam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://images.news18.com/ibnlive/uploads/2021/08/1628589585_mumbaiuniversity-1200x800.jpg"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-desktop exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Divisions</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Lorem ipsum dolor sit amet, nec contentiones reprehendunt ad. Aperiam imperdiet patrioque mei ex, ea nec falli conceptam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmuGTznvp9Pq1EloBED2ALEvfjyEeJ9QxgQ&usqp=CAU"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-search exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Examination</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Lorem ipsum dolor sit amet, nec contentiones reprehendunt ad. Aperiam imperdiet patrioque mei ex, ea nec falli conceptam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://images.news18.com/ibnlive/uploads/2021/08/1628589585_mumbaiuniversity-1200x800.jpg"
                          alt="content-management"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-file exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Management</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Lorem ipsum dolor sit amet, nec contentiones reprehendunt ad. Aperiam imperdiet patrioque mei ex, ea nec falli conceptam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                                      <br />
                                      <span>Ishrak Chaudhury</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                                      <br />
                                      <span>Kamrul Roy</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                                      <br />
                                      <span>Shahadat Mahapatra</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ BLOG ========================== --> */}

        <div id="blog">
          <div className="blog-content">
          <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3> Articles</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            <div className="blog-grid">
              
              <div className="blog-details wow fadeIn text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://images.hindustantimes.com/img/2022/06/22/1600x900/b68a68e2-f25b-11ec-bb9b-b9389131acd3_1655923729802.jpg"
                            alt="React hooks were introduced in version 16.8"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>
                                Example
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                          </p>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwlhcHlIUCQBgRlLvyf8bWUfvfupJ_T0srbdkFcFnYUDlnPNRm74z3BSFArth6BpZVcE&usqp=CAU"
                            alt="Example"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>
                                Example
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
                          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                          </p>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/17/859702-mumbai-university1.jpg"
                            alt="blog-img"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>Example</strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            LSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                          </p>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3> Contact Us</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          
                        </div>
                      </div>
                    </div>
                  
                  <div className="row contact-row mt-5">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                      <h3>Write Your Message Here</h3>
                      <div className="contact-form">
                        <form
                          action=""
                          method="post"
                          id="mc-embedded-subscribe-form contactForm"
                          name="mc-embedded-subscribe-form"
                          className="contact-form shake validate"
                          target="_blank" 
                          data-toggle="validator"
                          novalidate
                        >
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="text"
                                name="FLNAME"
                                id="mce-FLNAME"
                                className="required form-control"
                                placeholder="Your Name"
                                required
                                data-error="Please enter your name"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="email"
                                className="email required form-control"
                                name="EMAIL"
                                id="mce-EMAIL"
                                placeholder="Your Email"
                                required
                                data-error="Please enter your email"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="phone"
                                name="PHONE"
                                className="phone form-control"
                                id="phone mce-PHONE"
                                placeholder="Your Phone"
                                required
                                data-error="Please enter your phone"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <textarea
                                id="message mce-MESSAGE"
                                rows="7"
                                placeholder="Your Massage"
                                name="MESSAGE"
                                className="required form-control"
                                required
                                data-error="Please enter your message"
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div id="mce-responses" class="clear">
                            <div
                              class="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              class="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                              tabindex="-1"
                              value=""
                            />
                          </div>
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="submit mc-embedded-subscribe"
                            className="btn btn-warning"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
