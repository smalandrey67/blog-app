import { Component } from 'react'

//components
import Error from '../components/error'

class CatchError extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: false,
        }
    }

    componentDidCatch(){
        this.setState({error: true})
    }

    render(){
        const { error } = this.state
        if(error){
            return <Error titleError='Something went wrong' /> 
        }

        return this.props.children;
    }
}

export default CatchError