import React from 'react';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:null
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.data !== nextProps.data){
            this.setState({
                data:nextProps.data
            });
        }
    }
    shouldComponentUpdate(){
        return true;
    }
    componentDidUpdate(){
        console.log("hi")
    }
    render(){
        return (
            <div>
                State Data: <p>{this.state.data}</p>
                Props Data: <p>{this.props.data}</p>
            </div>
        )
    }
}