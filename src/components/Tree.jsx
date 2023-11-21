import Dump from './Dump'
import {Tree} from 'react-arborist'
import  { Fragment } from 'react'
import { 
    DocumentIcon,
    ChevronRightIcon
} from '@heroicons/react/20/solid'
import { 
    Folder
 } from '../svg/TreeSvg'

const Node = ({ node, style, handlers }) => {
    return (
        <div style={style} className="flex gap-1 text-slate-600">
            
            {node.isLeaf ? 
                <DocumentIcon  className=" text-sky-400 w-5 "/>
                :
                <Fragment> 
                    <ChevronRightIcon 
                    onClick={ () => node.isInternal && node.toggle() }
                    className={`w-4 text-slate-400 ${ node.isOpen ? "rotate-90" : "" }`} />
                    <Folder  className="w-4 text-yellow-400"/>
                </Fragment>
            }
            <span className={ `${node.isSelected ? "bg-cyan-600 text-white" : "" } cursor-pointer px-[6px] rounded-sm`}>
                {node.data.name}        
            </span>
        </div>
    );
}

const Trees = ({ handleLevel }) => {

    return (
        <div className="w-full lg:w-1/4 border-b-[1px] lg:border-r-[1px] border-slate-200 bg-slate-50 min-h-[320px] lg:h-[calc(100vh-6.7rem)] p-2 pt-0 overflow-y-auto overflow-x-hidden">
            <Tree
                initialData={Dump}
                openByDefault={false}
                indent={24}
                rowHeight={22}
                overscanCount={1}
                paddingTop={2}
                paddingBottom={10}
                padding={10 }
                onActivate={ handleLevel }
            >
                {Node}
            </Tree>
        </div>
    )
}

export default Trees