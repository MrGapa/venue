import React, { Component } from 'react'
import { Fade, Slide } from "react-reveal";

import Button from '../utils/MyButton'

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }


    render(){
        return(
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade onReveal={() => this.porcentage()}>
                        <div className='discount_porcentage'>
                            <span>{this.state.discountStart}%</span>
                            <span>Off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className='dicount_description'>
                            <h3>Purchase Tickeet Berofe Today</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta felis, at blandit est tempor sed. Curabitur erat mi, cursus ut mauris eu, iaculis egestas nunc. Integer ultricies lacus libero, in scelerisque eros feugiat et. Etiam tincidunt ante id nisl rhoncus, semper semper quam dapibus. Maecenas et elit a ipsum vulputate rutrum. Nulla odio tellus, malesuada et lorem quis, finibus rutrum erat. Cras a fringilla metus. Sed vehicula tincidunt elit sodales luctus. Nulla facilisi. Sed pharetra facilisis nisi non gravida. Etiam vitae leo enim. Aliquam eu efficitur dui.</p>

                            <Button text='Parchase Tickets' bck='#ffa800' color='#ffffff' link='http://google.com' />

                        </div>
                    </Slide>
                </div>

            </div>
        )
    }
}

export default Discount