import React, { Component } from 'react';
import MyButton from '../ui/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state = {
        prices:[100,150,200],
        positions: ['lucky', 'more lucky', 'super lucky'],
        desc:[
            'if you believe in luck, buy ticket to win the reward, nothing to loose',
            'buy more ticket to win this second reward, $150 winner could be you!',
            'if you think today is your lucky day, buy more ticket to win this biggest reward!'
        ],
        linkto:[
            'http://page1',
            'http://page2',
            'http://page3'
        ],
        delay:[500,0,500]
    }

    showBoxes = () => (
       this.state.prices.map((box, i) => (
           <Zoom delay={this.state.delay[i]} key={i}>
           <div className="pricing_item">
               <div className="pricing_inner_wrapper">
                   <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.positions[i]}</span>
                   </div>
                   <div className="pricing_description">
                       {this.state.desc[i]}
                   </div>
                   <div className="pricing_buttons">
                        <MyButton
                        text="Purchase"
                        bck="#ffa800"
                        color="#fffff"
                        link={this.state.linkto}
                        />
                   </div>
               </div>
           </div>
           </Zoom>
       ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Reward</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;