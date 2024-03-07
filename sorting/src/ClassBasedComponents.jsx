import { Component } from "react";
class MyClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {'message' : 'Hello from class based component'}
    }
    componentDidMount(){
        console.log('component is mounted')
    }
    componentDidUpdate(){
        console.log('component state is required')
    }
}