import { DefaultText } from '../../components/Forms'
import { BtnLarge } from '../../components/Buttons'
import { Th, Td } from '../../components/Table'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import PreviewForm from '../../components/PreviewForm'
import ConfigForm from '../../components/ConfigForm'
import { useState, Component } from 'react'

class Level_2 extends Component{
    state = {
        data: []
    }
    addData = () => {
        let data = this.state.data 
        
        data.push({})
        // push data tambah
        this.setState({
            data: data 
        })   
    }
    render(){
        return (
            <div className="flex-auto bg-slate-50 overflow-y-scroll h-[calc(100vh-6.7rem)] p-3">
                <div className="lg:flex w-full gap-2">
                    <div className="grow">
                        <DefaultText />            
                    </div>
                    <div className="pt-2 lg:pt-0">
                        <BtnLarge />
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-2 gap-2">
                    <div>
                        <div className="bg-white border-[1px] border-slate-200 p-3 rounded-md">
                        
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <Th>Nama</Th>
                                        <Th>Tipe Data</Th>
                                        <Th>Required</Th>
                                        <Th>Min</Th>
                                        <Th>Max</Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((x, i) => {
                                            return (
                                                <tr key={ i }>
                                                    <td className="w-32 border-[1px] border-slate-300">
                                                        <input type="text" className="p-0 w-32 border-none text-sm px-2 py-1" />
                                                    </td>
                                                    <td className="w-32 border-[1px] border-slate-300">
                                                        <select type="text" className="p-0 w-32 border-none text-sm px-2 py-1">
                                                            <option value="String">String</option>
                                                            <option value="Number">Number</option>
                                                            <option value="Date">Date</option>
                                                        </select>
                                                    </td>
                                                    <Td>
                                                        <Checkbox />
                                                    </Td>
                                                    <td className="w-16 border-[1px] border-slate-300">
                                                        <input type="text" className="p-0 w-16 border-none text-sm px-2 py-1" />
                                                    </td>
                                                    <td className="w-16 border-[1px] border-slate-300">
                                                        <input type="text" className="p-0 w-16 border-none text-sm px-2 py-1" />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                            <button className="border-2 border-blue-500 p-1 w-full mt-2 rounded-md" onClick={ this.addData }>
                                <center>
                                    <PlusCircleIcon className="w-5 text-blue-700"/>                        
                                </center>
                            </button>
                        </div>

                        { /* KONFIGURASI */ }
                        <ConfigForm />
                    </div>
                    <div>
                        { /* PREVIEW DARI SCHEMA */ }
                        <PreviewForm />
                    </div>
                </div>
            </div>
        )
    }
}

const Checkbox = () => {
    const [ isAktif, setAktif ] = useState(false)
    return (
        <center>
            <div onClick={ () => setAktif(!isAktif) } className={`w-4 h-4 rounded-sm  ${isAktif ? "bg-blue-500" : "border-2 border-slate-400"}`}></div>                                    
        </center>
    )
}
export default Level_2