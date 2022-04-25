import React from "react";
import "./AddEmployeeForm.css";

class AddEmployeeForm extends React.Component{

    state = {
        name: "",
        value: ""
    }

    //handles the submission of the form
    submitHandle = () =>{
       this.props.handle(this.state.name, this.state.value) 
    }
    

    //handles the event of button inputs for the name 
    nameHandle = (event) =>{
        const name = event.target.value
        this.setState({name: name})
        console.log(name)
    }
    //handles the event of button inputs for the values
    valueHandle = (event) =>{
        const value = event.target.value
        this.setState({value: event.target.value})
        console.log(value)
    }

    render(){

        return(
            <div className="save-box" onSubmit={this.submitHandle} hidden={this.props.hidden}>
                <h1>Add Employee</h1>
                <form className="add-form">
                    <div className="name-form-div">
                        <label htmlFor={"name"}>Name:</label>
                        <input type={"text"} name={"name"} onChange={this.nameHandle}></input> 
                    </div>
                    <div className="value-form-div">
                    <label htmlFor={"value"}>Value:&nbsp;</label>
                    <input type={"number"} name={"value"} onChange={this.valueHandle}></input>
                    </div>
                    <button className="add-form-button"type="submit" value={"submit"}>Add</button>
            </form>
        </div>
        )
    }
}

export default AddEmployeeForm