import { Component } from 'react'
import Secondbar from '../components/Secondbar'
import Tree from '../components/Tree'

import Level_1 from './TreeMenus/Level_1'
import Level_2 from './TreeMenus/Level_2'

class ApiTransaksi extends Component{
    state = {
        level: 1
    }

    // twist level
    handleLevel = (type) => {
        if(type.children){
            this.setState({
                level: 1
            })
        }else{
            this.setState({
                level: 2
            })
        }
    }
    render(){
        return (
            <div>
                <Secondbar 
                    level = { this.state.level }
                />
                <div className="lg:flex">
                    <Tree 
                        handleLevel = { this.handleLevel } 
                    />
                        {
                            this.state.level === 1 ?
                                <Level_1 />
                            :
                                <Level_2 />
                        }
                </div>
                
            </div>
        )
    }
}

export default ApiTransaksi