import React,{Component} from "react";

class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error,info){
        console.log(error)
    }

    render(){
        if(this.state.hasErrored)
            return <h1>Some unavoidable error has ocured. Please Contact 
            farmaayishofficial@gmail.com for solution.</h1>

        return this.props.children
    }
}

export default ErrorBoundary