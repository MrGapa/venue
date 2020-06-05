import React, { Component } from "react";
import MyButton from '../utils/MyButton'
import { Zoom } from "react-reveal";

class Pricing extends Component {

    state = {
        prices: [100,150,250],
        positions: ['Balcony', 'Medium', 'Star'],
        descrip:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta felis, at blandit est tempor sed. Curabitur erat mi, cursus ut mauris eu, iaculis egestas nunc. Integer ultricies lacus libero, in scelerisque eros feugiat et. Etiam tincidunt ante id nisl rhoncus, semper semper quam dapibus. Maecenas et elit a ipsum vulputate rutrum. Nulla odio tellus, malesuada et lorem quis, finibus rutrum eract.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta felis, at blandit est tempor sed. Curabitur erat mi, cursus ut mauris eu, iaculis egestas nunc. Integer ultricies lacus libero, in scelerisque eros feugiat et. Etiam tincidunt ante id nisl rhoncus, semper semper quam dapibus. Maecenas et elit a ipsum vulputate rutrum. Nulla odio tellus, malesuada et lorem quis, finibus rutrum eract.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta felis, at blandit est tempor sed. Curabitur erat mi, cursus ut mauris eu, iaculis egestas nunc. Integer ultricies lacus libero, in scelerisque eros feugiat et. Etiam tincidunt ante id nisl rhoncus, semper semper quam dapibus. Maecenas et elit a ipsum vulputate rutrum. Nulla odio tellus, malesuada et lorem quis, finibus rutrum eract.'
        ],
        linkto:[
            'http://google.com',
            'http://google.com',
            'http://google.com'
        ],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
       this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className='pricing_item'>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                                <span>${box}</span>
                                <span>{this.state.positions[i]}</span>
                        </div>
                        <div className='pricing_description'>
                                {this.state.descrip[i]}
                        </div>
                        <div className='pricing_buttons'>
                                <MyButton href={this.state.linkto[i]} text='Purchase Tickets' bck='#ffa800' color='white' />
                        </div>
                    </div>
                </div>
            </Zoom>
       ))
    )

    render(){
        return(
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>

                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>

                </div>

            </div>
        )
    }
}

export default Pricing