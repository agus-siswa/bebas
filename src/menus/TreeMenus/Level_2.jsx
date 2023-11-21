import { DefaultText } from '../../components/Forms'
import { BtnLarge, Checkbox } from '../../components/Buttons'
import { Th, Td } from '../../components/Table'
import {
    PlusCircleIcon
} from '@heroicons/react/24/outline'
import PreviewForm from '../../components/PreviewForm'
import ConfigForm from '../../components/ConfigForm'
const Level_2 = () => {
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
                                <tr>
                                    <Td>1</Td>
                                    <Td>1</Td>
                                    <Td>1</Td>
                                    <Td>1</Td>
                                    <Td>1</Td>
                                </tr>
                                <tr>
                                    <Td bw={true}>1</Td>
                                    <Td bw={true}>1</Td>
                                    <Td bw={true}>1</Td>
                                    <Td bw={true}>1</Td>
                                    <Td bw={true}>1</Td>
                                </tr>
                            </tbody>
                        </table>

                        <button className="border-2 border-blue-500 p-2 w-full mt-2 rounded-md">
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

export default Level_2