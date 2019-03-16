import React, { Component } from 'react';


export class Review extends Component {
    render() {
        return (
            <section id="reviews">
                <div className="row section-intro">
                    <h1>Reviews</h1>
                </div>
                <div className="row reviews-content">
                    <div className="review">
                        <div className="review-content">
                            <h3>Steven Adams</h3>
                            <h4> <i> "In one week, I was able to gain 3 pounds using Happle in prepparing my breakfast, lunch, and dinner."</i></h4>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review-content">
                            <h3>Sheryn Angela</h3>
                            <h4><i> "I was skeptical at first because I have tried a lot of
                                diet app and none of them were atcualy working. However, Happle helps me to achieve my body goal. I was able to
                                lose 20 pounds in 2 months using their meal plan!"
						        </i>
                            </h4>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review-content">
                            <h3>Tom Brady</h3>
                            <h4><i>
                                "It's so easy to use! I use Happle as my daily guidance in cooking my food everyday!"
						        </i>
                            </h4>
                        </div>
                    </div>

                    <form>
                                    <div className="col-md-12">
                                    <textarea className="form-control" placeholder="Write Review"
                                              rows="20" defaultValue=""/>
                                    </div>
                                    <div className="col-md-12">
                                        <input onClick={i => this.done()} type="button" className="form-control" value="Submit"/>
                                    </div>
                                </form>
                                <div>
                <div className={this.state["done"] ? 'hidden' : ''}>
                    <section className="secret">
                        <div className="container">
                        </div>
                    </section>

                    <section className="post">
                        <div className="container">
                            <div className="row post">
                                <form>
                                    <div className="col-md-12">
                                    <textarea className="form-control" placeholder="Write Review"
                                              rows="20" defaultValue=""/>
                                    </div>
                                    <div className="col-md-12">
                                        <input onClick={i => this.done()} type="button" className="form-control" value="Submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={this.state["done"] ? '' : 'hidden'}>
                    <section className="secret">
                        <div className="container">
                            <h1>Your review has been recorded</h1>
                        </div>
                    </section>

                    <section className="post review">
                        <div className="container">
                            <h1>You can choose to...</h1>
                            <input onClick={i => this.unDone()} type="button" className="form-control" value="write more reviews"/>
                        </div>
                    </section>
                </div>
            </div>
      
                    <button className="open-button">Write your story</button>

                    <div className="form-popup" id="myForm">
                        <form action="/action_page.php" /*className="form-container"*/>
                        <input type="text" name="review" value="Review"></input>
                        <input type="submit" value="Submit"></input>
                            <h1>Login</h1>

                            <input className="nameID" type="text" placeholder="Enter Name" name="name" required></input>

                            <textarea name="contactMessage" id="reviewID" placeholder="Write your story..." rows="10" cols="50" required=""></textarea>

                            <button type="submit" className="btn">Submit</button>
                            <button type="button" className="btn cancel" >Close</button>
                        </form>
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