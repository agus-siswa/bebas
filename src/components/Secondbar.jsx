import {
    PlusCircleIcon,
    TrashIcon
} from '@heroicons/react/24/outline'

import Switch from './Switch'
import Stage from './Stage'
const Large = () => {
    return (
        <div className="lg:flex lg:w-[75%]">
            <div className="p-1 border-r-[1px] border-slate-300 text-slate-500 w-full lg:w-[15%] pl-4">
                <div className="text-xs">Kode</div>
                <div className="pl-3">
                    3.1.1
                </div>
            </div>

            <div className="p-1 border-r-[1px] border-slate-300 text-slate-500 w-full lg:w-[20%] px-4">
                <div className="text-xs">Nama</div>
                <div className="pl-3">
                    Root
                </div>
            </div>

            <div className="p-1 border-r-[1px] border-slate-300 text-slate-500 w-full lg:w-[10%] px-4">
                <div className="text-xs">Endpoint</div>
                <div className="pl-3">
                   
                        <Switch />            
                   
                </div>
            </div>
            <div className="p-1 border-r-[1px] border-slate-300 text-slate-500 w-full lg:w-[10%] px-4">
                <div className="text-xs">Stage</div>
                <div className="pl-3">
                    <Stage />
                </div>
            </div>

            <div className="p-1 border-r-[1px] border-slate-300 text-slate-500 w-full lg:w-[30%] px-4">
                <div className="text-xs">Permission</div>
                <div className="pl-3">
                    
                </div>
            </div>
            <div className="p-1 border-r-[1px] border-slate-300 text-slate-500 w-full lg:w-[15%] px-4">
                <div className="text-xs">Delete</div>
                <div className="lg:flex justify-center">
                    <TrashIcon className="w-5 text-red-600"/>
                </div>
            </div>
        </div>
    )
}

const Secondbar = ({ level }) => {
    return (
        <div className="border-b-[1px] border-slate-300 bg-slate-200 w-full overflow-x-auto">
            <div className="lg:flex  lg:h-[3rem]  lg:w-full">
                <div className="border-r-[1px] border-slate-300 lg:w-1/4 lg:flex lg:justify-end">
                    <button className="bg-indigo-600 pb-3 px-5 text-slate-50 flex gap-1 pt-3 w-full lg:w-auto justify-center">
                        <PlusCircleIcon className="w-5"/>
                        Tambah
                    </button>
                </div>
                <Large 
                    level = { level }
                />
            </div>
            
        </div>
    )
}

export default Secondbar