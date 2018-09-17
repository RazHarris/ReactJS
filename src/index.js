import React from 'react';
import ReactDOM from 'react-dom'

import FirstFriend from './FirstComponent';
import Name from './components/Name';
import Comment from "./commentComponent/Comment";
import LifeCycleComponent from './lifecycleComponent/LifeCycleComponent';
import FormComponent from './formComponent/formComponent';
import ControlledForm from './formComponent/ControlledForm';
import RemoteData from './APIComponent/RemoteData';




var position = document.getElementById("rootcomponent")

var position2 = document.getElementById("container2")

var position3 = document.getElementById("lifecycle")

ReactDOM.render(
        <div>
            <FirstFriend location="Chennai">RAM
            </FirstFriend>
            <Name fcolor = "purple" bcolor="burlywood" >R</Name>
            <Name fcolor="red" bcolor="orange">A</Name>
            <Name fcolor="brown" bcolor="yellow">M</Name>
           <br></br>
           <br></br>

           
        </div>
        , position)

ReactDOM.render(
                <div>    
                <Comment name="RAM">React is fun to work with</Comment>
                <Comment name="HARRIS">Session was boring</Comment>
                <Comment name="RAZ">Too much work is no good</Comment>
                <Comment name="THOR">Tired!</Comment>
                </div>
                , position2)        

ReactDOM.render(
                <div>
                    <LifeCycleComponent></LifeCycleComponent>
                    <p></p>
                    <FormComponent></FormComponent>
                    <p></p>
                    <ControlledForm></ControlledForm>
                    <p></p>
                    <RemoteData></RemoteData>
                </div>
                , position3)                