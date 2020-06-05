import React, { Component } from "react";

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcons from '@material-ui/icons/Menu';
import IconButtons from '@material-ui/core/IconButton'

import SideDrawer from './SideDrawer'

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        window.scrollY > 0 ? this.setState({ headerShow: true }) : this.setState({ headerShow: false })
    }

    render(){
        return(
           <AppBar position="fixed" style={{ backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent', boxShadow: 'none', padding: '10px 0px'}}>
               <ToolBar>
                    <div className='header_logo'>
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>
                    <IconButtons aria-label='Menu' color='inherit' onClick={ () => this.toggleDrawer(true) }>
                        <MenuIcons/>
                    </IconButtons>
                    <SideDrawer open={this.state.drawerOpen} onClose={(value) => this.toggleDrawer(value)} />
               </ToolBar>
           </AppBar>
        )
    }
}

export default Header;