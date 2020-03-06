import React,{Component} from "react";
import {connect} from  'react-redux';
import {createStructuredSelector} from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS="GET_THINGS_SUCCESS";


function _getThings(){
    console.log("this is get things select");
    return dispatch =>{
        dispatch({type: GET_THINGS_REQUEST});
        return fetch('v1/things.json')
            .then(response=>response.json())
            .then(json=>dispatch(getThingsSuccess(json)))
            .catch(err=>console.log(err));
    }
};
function getThingsSuccess(json) {
    return{
        type:GET_THINGS_SUCCESS,
        json
    }
}

class HelloWorld extends  Component{
    _renderThingsList(){
        var data = this.props.things;
        var arr =[];
        for(var i=0;i<data.length;i++){
            arr.push(<li key={i}>{data[i].name} {data[i].guid}</li>)
        }
        return arr;
    }
  render () {
    return (
     <div>
       this is test: {this.props.greeting}
       <button onClick={()=>this.props._getThings()}>Button</button>
         <br/>
         <ul>{this._renderThingsList()}</ul>
     </div>
    );
  }
}

const structuredSelector=createStructuredSelector({
   things: state=>state.things,
});

const mapDispatchToProps={_getThings};


export default  connect(structuredSelector,mapDispatchToProps)(HelloWorld);