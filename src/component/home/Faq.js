import React, { useRef } from 'react'
import "./Home.css"
const Faq = () => {


    return (

        <section id='faq' className="py-4 pb-5 FAQ">
            <div className="container pb-5">
                <div className="row my-5">
                    <div className="col-md-6 mx-auto text-center ">
                        <h1>FAQs</h1>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="accordion" id="accordionRental">
                        {/* question 1 */}
                            <div className="accordion-item mb-3">
                                <h5 className="accordion-header" id="headingOne">
                                    <button className="question accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Where will the conference take place?
                                        <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionRental">
                                    <div className="accordion-body text-sm opacity-8">
                                      coming soon
                                    </div>
                                </div>
                            </div>
                        {/* question 2 */}
                        <div className="accordion-item mb-3">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button className="question accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    What is the registration cost?
                                        <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionRental">
                                    <div className="accordion-body text-sm opacity-8">
                                      coming soon
                                    </div>
                                </div>
                            </div>

                        {/* question 3 */}
                        <div className="accordion-item mb-3">
                                <h5 className="accordion-header" id="headingThree">
                                    <button className="question accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Can I purchase single event tickets?
                                        <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionRental">
                                    <div className="accordion-body text-sm opacity-8">
                                      coming soon
                                    </div>
                                </div>
                            </div>
                        {/* question 4 */}
                        <div className="accordion-item mb-3">
                                <h5 className="accordion-header" id="headingFour">
                                    <button className="question accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    What if I cannot attend the in-person conference, will there be an option to attend
                            virtually?
                                        <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionRental">
                                    <div className="accordion-body text-sm opacity-8">
                                      coming soon
                                    </div>
                                </div>
                            </div>
                        {/* question 5 */}
                        <div className="accordion-item mb-3">
                                <h5 className="accordion-header" id="headingFive">
                                    <button className="question accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    when will the registration open?
                                        <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseFive" className="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordionRental">
                                    <div className="accordion-body text-sm opacity-8">
                                      coming soon
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
