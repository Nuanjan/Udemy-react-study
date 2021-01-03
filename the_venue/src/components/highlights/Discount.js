import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../ui/MyButton';

class Discount extends Component {

    state ={
        freeStart: 0,
        freeEnd: 100
    }

    free = () => {
        // loop until free start equal to free end
        if(this.state.freeStart < this.state.freeEnd) {
            this.setState({
                freeStart: this.state.freeStart  + 1
            })
        }
    }
    componentDidUpdate() {
        setTimeout(() => {
            this.free()
        }, 30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                    onReveal={() => this.free()}
                    >
                    <div className="discount_porcentage">
                     <span>{this.state.freeStart}%</span>
                    <span>FREE!</span>
                    <div>(option) $1 for each ticket to win the reward</div>
                    </div>
                    </Fade>
                    <Slide right>
                    <div className="discount_description">
                        <h3>Only One Ticket Could win Up to $200!</h3>
                        <p>
                            The profit from ticket sell will be donated to 
                            pug rescue shelter. 
                        </p>
                        <div>
                            <MyButton 
                            text="Purchase Tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="http://google.com"
                            />
                        </div>
                    </div>
                    </Slide>
                </div>
                
            </div>
        );
    }
}

export default Discount;