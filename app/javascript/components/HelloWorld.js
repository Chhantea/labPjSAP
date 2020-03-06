import React,{Component} from "react"
export default class HelloWorld extends  Component{
  render () {
    return (
     <div>
       this is test: {this.props.greeting}
     </div>
    );
  }
}
