import { DefaultText } from '../../components/Forms'
import { BtnLarge, Checkbox } from '../../components/Buttons'
import Datatable from '../../components/Datatable'
import { Th } from '../../components/Table'
const Level_1 = () => {
    return (
        <div className="flex-auto bg-slate-50 overflow-y-scroll h-[calc(100vh-6.7rem)] p-3">
            <div>
                <div>
                    <div className="lg:flex w-full gap-2">
                        <div className="grow">
                            <DefaultText />            
                        </div>
                        <div className="pt-2 lg:pt-0">
                            <BtnLarge />
                        </div>
                    </div>
                    <div>
                    
                    </div>

                    <Datatable 
                        data = { [] } 
                        Thead = { () => {
                            return (
                                    <tr>
                                        <Th>No</Th>
                                        <Th>No</Th>
                                    </tr>
                            )
                        } }
                        rows = { () => {
                            return (
                                <tr>
                                    <td>1</td>
                                </tr>
                            )
                        } }
                    />

                   
            </div>
            </div>
        </div>
    )
}

export default Level_1