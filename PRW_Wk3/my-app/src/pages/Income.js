import React, {Component} from 'react';

class Income extends Component {
    //Set initial state
    state = {
        incomeTable: [],
        paycheckDate: '',
        paycheckAmount: '',
        total: 0,
    };

    //Update state as input value is changed
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //Submit to add item to list
    handleSubmit = (e) => {
        e.preventDefault();

        let payAmt = document.getElementById("paycheckAmount");
        let date = document.getElementById("paycheckDate");

        //Validation checks
        if(date.value === ''){
            alert("A date must be selected.")
        }
        else if(payAmt.value === '') {
            alert("Amount field must not be blank.")
        }

        else if(payAmt.value === "0") {
            alert("Amount field value must not be 0.")
        }
        //Set the state to current input value
        else {
            this.setState({
                paycheckAmount: this.state.paycheckAmount,
                paycheckDate: this.state.paycheckDate,
            });

            //Create key values
            let randomID = Math.floor(Math.random() * 99999);

            //Create new table object
            let newTab = this.state.incomeTable;

            //Push new values to the table
            newTab.push({
                key: randomID,
                paycheckDate: this.state.paycheckDate,
                paycheckAmount: this.state.paycheckAmount,
            });

            //Set new state of updated table
            this.setState({
                incomeTable: newTab
            });

            //Reset state values
            this.setState({
                paycheckDate: '',
                paycheckAmount: 0,
            });

            //Clear input fields
            payAmt.value = '';
            date.value = '';
        }
    };

    //Remove Item
    //Removes key, Table will remove object key pairs that are not currently added
    onDismiss = id => {
        const isNotId = item => item.key !==id;
        const updatedList = this.state.incomeTable.filter(isNotId);
        this.setState({incomeTable: updatedList});
    };

    updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
    }

    render() {
        return (
            <section className="income-content">
                <h1>Income</h1>
                <div className="wrapper">
                    <section>
                        <h2>Add New Paycheck</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="paycheckDate">Date</label>
                            <input id="paycheckDate" name="paycheckDate" type="date" onChange={this.handleChange}/>

                            <label htmlFor="paycheckAmount">Amount</label>
                            <input id="paycheckAmount" name="paycheckAmount" type="number" min="0" step="0.01"
                                   onChange={this.handleChange}/>

                            <button type="submit" className="fas fa-plus-circle" id="add">Add
                                item
                            </button>
                        </form>

                        <section>
                            <h3>Income Tracker</h3>
                            <table id="itemTable">
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Remove Item</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.incomeTable.map((item) =>
                                    <tr key={item.key}>
                                        <td>{item.paycheckDate}</td>
                                        <td>{"$" + item.paycheckAmount}</td>
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
            </section>
        );
    }
}

export default Income;