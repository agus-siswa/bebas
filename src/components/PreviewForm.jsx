import { Component } from 'react'
import dump from '../api/Dump'
import buildForm from '../api/BuildForm'
class PreviewForm extends Component{

    componentDidMount = () => {
        buildForm(dump)
    }
    render(){
        return (
            <div className="bg-white rounded-md border-[1px]">
                <div className="border-b-[1px] p-4">
                    Preview Form
                </div>
                <div className="p-4 min-h-[calc(100vh-240px)]">
                    Preview Form            
                </div>
            </div>
        )
    }
}

export default PreviewForm
