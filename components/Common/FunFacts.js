import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class FunFacts extends Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render() {
        return (
            <React.Fragment>
                <section className="fun-facts-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                            >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 324
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>Project Completed</p>
                                    <div className="back-text">P</div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                                >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 100
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">%</span>
                                    </h3>
                                    <p>Client Satisfaction</p>
                                    <div className="back-text">C</div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                                >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 15
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                    </h3>
                                    <p>Awards</p>
                                    <div className="back-text">A</div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-fun-facts">
                                    <h3>
                                        <span className="odometer">
                                            <VisibilitySensor
                                                onChange={this.onVisibilityChange}
                                                offset={{
                                                    top: 10
                                                }}
                                                delayedCall
                                                >
                                                <CountUp
                                                    start={0}
                                                    end={
                                                        this.state.didViewCountUp
                                                        ? 48
                                                        : 0
                                                    }
                                                    duration={3}
                                                />
                                            </VisibilitySensor>
                                        </span>
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>Expert Members</p>
                                    <div className="back-text">E</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default FunFacts;