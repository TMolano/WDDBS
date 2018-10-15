import React, {Component} from 'react';

class Expenses extends Component {
    //Set initial state
    state = {
        expenseTable: [],
        title: '',
        expenseAmount: 0,
        addExpense: 0,
        total: 0
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

        let title = document.getElementById("title");
        let expAmt = document.getElementById("expenseAmount");

        //Validation checks
        if(title.value === ''){
            alert("Title field must not be blank.")
        }
        else if(expAmt.value === '') {
            alert("Amount field must not be blank.")
        }

        else if(expAmt.value === "0"){
            alert("Amount field value must not be 0")
        }
        //Set the state to current input value
        else {
            this.setState({
                title: this.state.title,
                expenseAmount: this.state.expenseAmount,
            });

            //Create key values
            let randomID = Math.floor(Math.random() * 99999);

            //Create new table object
            let newTab = this.state.expenseTable;

            //Push new values to the table
            newTab.push({
                key: randomID,
                title: this.state.title,
                expenseAmount: this.state.expenseAmount,
            });

            //Set new state of updated table
            this.setState({
                expensesTable: newTab
            });

            //Reset state values
            this.setState({
                title: '',
                expenseAmount: 0
            });

            //Clear input fields
            title.value = '';
            expAmt.value = '';
        }
    };

    //Remove Item
    //Removes key, Table will remove object key pairs that are not currently added
    onDismiss = id => {
        const isNotId = item => item.key !==id;
        const updatedList = this.state.expenseTable.filter(isNotId);
        this.setState({expenseTable: updatedList});

        };

    add = () => {
        const{expenseAmount, addExpense} = this.state;
        this.setState({
            total: (parseInt(expenseAmount)+parseInt(addExpense))
        })
    };

    render() {
        return (
            <section className="expenses">
                <h1>Expenses</h1>
                <div className="wrapper">
                    <section>
                        <h2>Add New Expense</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" onChange={this.handleChange}/>

                            <label htmlFor="expenseAmount">Amount</label>
                            <input type="number" name="expenseAmount" id="expenseAmount" min="0" step="0.01"
                                   onChange={this.handleChange}/>

                            <button type="submit" className="fas fa-plus-circle" id="add">Add
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
                                {this.state.expenseTable.map((item) =>
                                    <tr key={item.key}>
                                        <td>{item.title}</td>
                                        <td>{"$" + item.expenseAmount}</td>
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

export default Expenses;