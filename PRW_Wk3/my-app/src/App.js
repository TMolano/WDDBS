import React, {Component} from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableContent: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onDismiss = this.onDismiss.bind(this);

    }

    //Remove Item
    onDismiss(id) {
        const isNotId = item => item.key !== id;
        const updatedList = this.state.tableContent.filter(isNotId);
        this.setState({tableContent: updatedList});
    }


    //Add item
    handleClick() {
        let randomID = Math.floor(Math.random() * 99999);

        // recreate a new object and stock the new line in
        let newTab = this.state.tableContent;

        newTab.push({
            key: randomID,
            title: this.state.title,
            amount: this.state.amount,
        });

        this.setState({
            tableContent: newTab
        });

        // Clear the content of the inputs
    }

    //Update input field value state
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <section className="App">
                <header>
                    <nav>
                        <ul>
                            <li><a href="">Overview</a></li>
                            <li><a href="">Expenses</a></li>
                            <li><a href="">Income</a></li>
                        </ul>
                    </nav>
                    <h1>Money Manager</h1>
                </header>
                <div className="wrapper">
                    <section>
                        <h2>Add Expenses</h2>
                        <form>
                            <label htmlFor="name">Title</label>
                            <input type="text" name="title" onChange={this.handleChange}/>

                            <label htmlFor="amount">Amount</label>
                            <input type="text" name="amount" onChange={this.handleChange}/>

                            <button type="button" className="fas fa-plus-circle" id="add" onClick={this.handleClick}>Add
                                item
                            </button>
                        </form>

                        <section>
                            <h3>Expense Tracker</h3>
                            <table id="itemTable">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Remove Item</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.tableContent.map((item) =>
                                    <tr key={item.key}>
                                        <td>{item.title}</td>
                                        <td>{"$" + item.amount}</td>
                                        <td>
                                            <button onClick={() => this.onDismiss(item.key)}
                                                    type="button" className="fas fa-trash-alt" id="remove"></button>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </section>
                    </section>
                </div>
                <footer></footer>
            </section>
        );
    }
}

export default App