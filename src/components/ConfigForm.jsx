import { Component } from 'react'
import { Text, Select } from '../components/Forms'
import { method } from '../api/Value'
class ConfigForm extends Component{
    render(){
        return (
            <div className="bg-white rounded-md border-[1px] mt-2">
                <div className="p-2">
                    <Select 
                        title="Method"
                        list = { method }
                    />
                    <Text 
                        title="Send URL Method"
                    />
                    <Text 
                        title="Send URL Production"
                    />
                    <Text 
                        title="GET URL Test"
                    />
                    <Text 
                        title="GET URL Test"
                    />
                    <Text 
                        title="GET URL Production"
                    />
                </div>
            </div>
        )
    }
}

export default ConfigForm