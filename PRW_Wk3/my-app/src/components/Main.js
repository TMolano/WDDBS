import React, {Component} from 'react';

import Overview from '../pages/Overview';
import Income from '../pages/Income';
import Expenses from '../pages/Expenses';

//Render Pages
class Main extends Component{
    render(){
        return(
            <section className="main-content">
                <Route exact path="/Overview" component={Overview}/>
                <Route exact path="/Income" component={Income}/>
                <Route exact path="/Expenses" component={Expenses}/>
            </section>

        )
    }
}

export default Main;