import { 
    CodeBracketIcon,
    ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { path } from '../api/Value'
const Navbar = () => { 
    const pathApp = path()

    return (
        <div className="bg-gradient-to-r from-fuchsia-700 to-purple-700 w-full flex justify-between h-14">
            <div className="flex pl-5 pt-3 gap-4">
                <div className=" font-bold text-slate-50 text-lg">
                    BIOS
                </div>
                <Link to={ pathApp } className="font-medium pt-1 flex gap-1 text-slate-50">
                        <CodeBracketIcon className="w-5 -mt-5"/>
                        API Transaksi
                </Link>

                <Link to={`${pathApp}/hal2`} className="font-medium pt-1 flex gap-1 text-slate-50">
                   
                        <CodeBracketIcon className="w-5 -mt-5"/>
                        Hal 2
                    
                </Link>
            </div>
            <div className="p-4">
                <ArrowLeftOnRectangleIcon className="w-6 text-slate-50" />
            </div>
        </div>
    )
}

export default Navbar 