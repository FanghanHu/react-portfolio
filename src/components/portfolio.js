import { Component } from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="container mb-5">
                <main className="p-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="https://fanghanhu.github.io/Scheduler/">
                                <img className="img-thumbnail" src="./assets/img/dayScheduler.png" alt="Day scheduler" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="https://fanghanhu.github.io/Fallout76CardBuilder/index.html">
                                <img className="img-thumbnail" src="./assets/img/fallout76Simulator.png" alt="Fallout76 Deck Simulator" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="http://globalmerchant.us/">
                                <img className="img-thumbnail" src="./assets/img/gmp.png" alt="Global Merchant Processing Website" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="https://chefjaypeek.github.io/petResume/index.html">
                                <img className="img-thumbnail" src="./assets/img/petResume.png" alt="Pet Resume" />
                            </a>
                        </div>
                    </div>

                    <hr />
                    <h3 className="text-center">More will be added in the future...</h3>
                </main>
            </div>
        );
    }
}

export default Portfolio;