import React, { Component } from 'react';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            reviews: [],
            nReview: 0,
        };
    }


    render() {
        return (
            <section id="reviews">

                    <form>
                        <div className="col-md-12">
                            <textarea className="form-control" placeholder="Write Review"
                                rows="20" defaultValue="" />
                        </div>
                        <div className="col-md-12">
                            <input onClick={i => this.done()} type="button" className="form-control" value="Submit" />
                        </div>
                    </form>
                    <div>
                        <div className={this.state["done"] ? 'hidden' : ''}>
                            <section className="review">
                                <div className="container">
                                </div>
                            </section>

                            <section className="post">
                                <div className="container">
                                    <div className="row post">
                                        <form>
                                            <div className="col-md-12">
                                                <textarea className="form-control" placeholder="Write Review"
                                                    rows="20" defaultValue="" />
                                            </div>
                                            <div className="col-md-12">
                                                <input onClick={i => this.done()} type="button" className="form-control" value="Submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={this.state["done"] ? '' : 'hidden'}>
                            <section className="review">
                                <div className="container">
                                    <h1>Your review has been recorded</h1>
                                </div>
                            </section>

                            <section className="post review">
                                <div className="container">
                                    <h1>You can choose to...</h1>
                                    <input onClick={i => this.unDone()} type="button" className="form-control" value="write more reviews" />
                                </div>
                            </section>
                        </div>
                    </div>
            </section>
        );
    }
    unDone() {
        this.setState({
            done: false
        })
    }


    done() {
        this.setState({
            done: true
        })
    }
}
export default Review;