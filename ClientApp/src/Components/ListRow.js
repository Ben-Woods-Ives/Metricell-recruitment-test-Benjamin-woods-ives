import React from "react";
import "./ListRow.css"

class ListRow extends React.Component{

    state = {
        editable: false,
        updateValue: this.props.value,
    }

    // handles what happens when the edit button is pressed
    editButtonHandle = () =>{
        if (!this.state.editable){
            this.setState(() => {return{editable: true}})
        }
        else{
            console.log(this.props.update(this.props.name, this.state.updateValue))
            this.setState(() => {return{editable: false}})
        }

    }
    
    // handles what happens when the cancel button is pressed
    cancelButtonHandle = () => {
        this.setState(() => {return{editable: false}})
    }

    //handles what happens in the editable box
    valueHandle = (event) =>{
        const value = event.target.textContent
        console.log(value)
        this.setState(() => {return{updateValue: value}})
    }

    render(){
        var editable = "false"
        var editName = "edit"
        var cancelButtonHidden = true
        if (this.state.editable){
            editable = "true"
            editName = "save"
            cancelButtonHidden = false
        }
        else{
            var value = this.props.value
        }
        return(
            <div className={"row-div"}>
                <div className="name-div">{this.props.name}</div> 
                <div className="value-div" suppressContentEditableWarning={true} onInput={this.valueHandle} contentEditable={editable}>{value}</div>                                             
                <div className="button-div">                                              
                <button className="edit-button" onClick={this.editButtonHandle}>{editName}</button>
                <button className="cancel-button" hidden={cancelButtonHidden} onClick={this.cancelButtonHandle}>cancel</button>
                </div>
            </div>
        )
    }
}

export default ListRow