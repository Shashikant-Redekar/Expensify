import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? props.expense.createdAt : new Date(),
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onChangeNote = (e) => {
        //const note = e.target.value;
        e.persist(); //preventy refreshing of e.target.value and to take all the input we enter(or else it takes only one word and refreshes)
        this.setState(() => ({ note: e.target.value }));
    };
    onChangeAmount = (e) => {
        const amount = e.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/) ){  //for expression explaination on regex101
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt}));
        };
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please enter both description and amount.' }))
        }else{
            this.setState(() => ({ error:'' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Discription' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onChangeAmount} />
                    <DatePicker selected={this.state.createdAt} onChange={this.onDateChange} dateFormat='dd/MM/yyyy' />
                    <textarea placeholder='Add a note for your expense(optional)' value={this.state.note} onChange={this.onChangeNote}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    };
};