import React from 'react';
class ControlledForm extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            programming:false
        }
            //this.handleNameChange=this.handleNameChange.bind(this)
            this.submitForm=this.submitForm.bind(this)
            this.KnowProgramming=this.KnowProgramming.bind(this)
            this.captureChange=this.captureChange.bind(this)

    }
   /*   handleNameChange(e)
    {
        this.setState({name:e.target.value})
    } */
    KnowProgramming(e)
    {
        console.log(e);
        this.setState({programming:e.target.checked})
    } 

    captureChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    submitForm(e)
    {
        e.prventDefault()
        console.log("Submitted")
        console.log(this.state);
    }
    render() { 
        return (  
            <div>
                <h3>ControlledForm</h3>
                <form onSubmit={this.submitForm}>

                Name:
                <input type="text" 
                name="name"
                value={this.state.name} 
                onChange={this.captureChange}/>

                Email:
                <input type="email"
                name="email"
                value={this.state.email}
                onChange={this.captureChange}/>
              
                Know programming:
                <input type="checkbox"
                name="Programming"
                 value={this.state.programming}
                 onChange={this.KnowProgramming}/>             

                <button type="Submit">Save</button>
                </form>
            </div>
        );
    }
}
 
export default ControlledForm;