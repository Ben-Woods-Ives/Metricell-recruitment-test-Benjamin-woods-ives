import React from "react";
import ListRow from "./ListRow";
import "./EmployeeList.css"
import AddEmployeeForm from "./AddEmployeeForm";

class EmployeeList extends React.Component{

    state = {
        employees: [],
        addVisibility: false
    }

    getEmployees = async() => {
        var resp = await fetch("/employees").then(response => response.json());
        this.setState({employees: resp})
    }

    createEmployee = (name, value) =>{
        return fetch("/employees", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, value: value })
        });
    }

    //handles adding an employee
    addEmployeeHandle = (name, value) => {
        const resp = this.createEmployee(name, value)
        this.getEmployees()        
        this.getEmployees()
        return resp
    }
    
    //handles updating an employee
    updatehandle = (name ,value) =>{
        const resp = this.updateEmployee(name, value)
        this.getEmployees()        
        this.getEmployees()
        return resp
    }

    updateEmployee = async(name, value) =>{
        return await fetch("/employees", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, value: value })
        });
    }

    getEmployees = async() => {
        var resp = await fetch("/employees").then(response => response.json());
            this.setState(()=> {return{employees: this.state.employees = resp}})
    } 

    addButtonHandle = () => {
        if (this.state.addVisibility === false){
                    this.setState(() => {return{addVisibility: true}})
        }
        else{
            this.setState(() => {return{addVisibility: false}})
        }

    }
    //gets employees
    componentDidMount(){
        this.getEmployees()

    }

    render(){
        var hidden = true
        var buttonValue = "Add Employee"
        if (this.state.addVisibility === true) {
            hidden = false
            buttonValue = "Cancel"

        }
        return (
            <div className="page">
                <div className="list-div">
                    <h1><u>Employee List</u></h1>
                    <button className="add-employee-button" onClick={this.addButtonHandle}>{buttonValue}</button>
                    <div className="column-header">
                        <h2>Employee name</h2>
                        <h2>Employee Value</h2>
                    </div>
                    {this.state.employees.map(employee => <ListRow key={employee.name} name={employee.name} value={employee.value} update={this.updatehandle} />)}  
                </div>
                <AddEmployeeForm handle={this.addEmployeeHandle} hidden={hidden}/>
            </div>
        )
    }
}

export default EmployeeList