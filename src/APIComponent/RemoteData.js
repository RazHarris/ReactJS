import React from 'react';
import axios from 'axios'
import DisplayUser from './DisplayUser';

class RemoteData extends React.Component {
    constructor(){
        super()
        this.state ={
            users:[],
            title:"",
            description:"",
            vote:0,
            imageUrl:"",
            avartarUrl:"",
            url:""
        }
        this.callRemoteData = this.callRemoteData.bind(this)
        this.insertData = this.insertData.bind(this)
        this.inputImage = this.inputImage.bind(this)
        this.inputDescription = this.inputDescription.bind(this)
        this.inputTitle = this.inputTitle.bind(this)
    }
   

    componentWillMount(){
        this.callRemoteData()
    }

    callRemoteData(){
        axios.get("http://localhost:4444/feedback")
                .then((response)=>{
                    console.log(response.data)
                    this.setState({users:response.data})
                    console.log(this.state.users)
                })
    }
    displayData(){
        return(this.state.users.map((oneUser)=>{
           return(
               <DisplayUser
                   key={oneUser.id}
                    id={oneUser.id}
                    title={oneUser.title}
                    description={oneUser.description}
                    imageUrl={oneUser.imageUrl}
                    avartarUrl={oneUser.avartarUrl}
                    vote={oneUser.vote}
               ></DisplayUser>)
        }))
    }

    insertData(){
         const insertRecord = {
            "title":this.state.title,
            "description":this.state.description,
            "url":this.state.url,
            "imageUrl":this.state.imageUrl,
            "avartarUrl":this.state.avartarUrl,
            "vote":this.state.vote
        }
        axios.post("http://localhost:4444/feedback", insertRecord)
                .then((response)=>{

                    console.log(response.data)

                })

    }
    inputTitle(e){
        this.setState({title:e.target.value})
    }

    inputDescription(e){
        this.setState({description:e.target.value})
    }

    inputImage(e){
   //this.setState({})
        console.log(e.target.files[0].name)
        //"imageUrl": "../images/4.gif",
        const tempPath = "../image/" + e.target.files[0].name
        this.setState({
                       imageUrl:tempPath,
                       avartarUrl:tempPath,
                       url:"http://www.google.com"
                   })
    }
    render() { 
        return ( <div>
                    Call the child component 
                    to dispaly JSON data.
                    <table border="1">
                        <thead>
                          <tr>
                               <th></th>
                                <th>Id</th>
                               <th>Votes</th>
                               <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.displayData()}
                        </tbody>    
                    </table>
                    <p></p>
                    <form>
                        <label>Title: </label>
                        <input type="text" 

                               value={this.state.title}

                               onChange={this.inputTitle}    

                               />

                         <br></br>      

                        <label>Description: </label>
                        <textarea 
                               value={this.state.description}
                               onChange={this.inputDescription}    
                               />
                         <br></br>             
                        <label>Profile Pic: </label>

                        <input type="file"  

                               onChange={this.inputImage} 

                               accept="image/png, image/jpeg" 
                            />
                    </form>
                    <button onClick={this.insertData}>Insert using POST</button>
                    </div> );
    }
}

 

export default RemoteData;