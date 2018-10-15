import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends Component{
    render(){
        return (
            <nav>
                <h1>Money Manager</h1>
                <NavLink to="/Overview" className="navlink">Overview</NavLink>
                <NavLink to="/Expenses" className="navlink">Expenses</NavLink>
                <NavLink to="/Income" className="navlink">Income</NavLink>
            </nav>
        )
    }
}

export default Nav;