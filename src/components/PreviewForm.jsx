import { Component } from 'react'
import dump from '../api/Dump'
import buildForm from '../api/BuildForm'
import { ucwords } from '../api/Value'
import builderForm from '../api/BuildForm'
import SubmitForm from './SubmitForm'
class PreviewForm extends Component{
    state = {
        form: []
    }
    componentDidMount = () => {
        this.setState({
            form:  builderForm(dump)
        })
    }

    render(){
        
        return (
            <div className="bg-white rounded-md border-[1px]">
                <div className="border-b-[1px] p-4">
                    Preview Form
                </div>
                <div className="p-4 min-h-[calc(100vh-240px)]">
                   { this.state.form } 

                    <SubmitForm />
                </div>
            </div>
        )
    }
}

export default PreviewForm
