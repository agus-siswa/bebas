import { Component } from 'react'
import { Text, Select } from './Forms'
import { MagnifyingGlassIcon, ArrowsUpDownIcon, ArrowUpIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
class Datatable extends Component{
    constructor(props){
        super(props)
            
        this.state = {
            pagination:[],
            showing:10,
            search:"",
            pagingActive:0,
            group_paging:0,
            start_page:0,
            order_by:{
                key:"",
                asc: false,
                isNumber: false
            },
            
        }
    }


    handleSearch = (e) => {
        this.setState({
            search:e.target.value,
            pagingActive:0,
            start_page:0
        })
    }
    handlePaging = (e,index,end) => {
      //  console.log(index);
        
        let test = {
            pagingActive:index
        };
        if (typeof index == "object") {
            test['pagingActive'] = index.index;
            test['start_page'] = index.next_group;
        }
        e.preventDefault()
        this.setState(test,() => {
        
        })
    }
    pindahGroup = (e = "",pindahGroup) => {
      
        if (e == "") {
            
        }else{

            e.preventDefault()
        }
        this.setState({
            start_page:pindahGroup
        })
    }
    handleShowing =  (value) => {
        let start_page = this.state.start_page;
        let showing = parseInt(value.target.value);
        this.setState({
            showing:showing,
            start_page:0,
            pagingActive:0
        });
    }

    sortedBy = ({ key, isNumber=false }) => {
        const order_by  = this.state.order_by 
        console.log(key)
        if(order_by.key === key){
            order_by["asc"] = !order_by["asc"]
            this.setState({
                order_by: order_by
            })
        }else{
            this.setState({
                order_by: {
                    key: key,
                    isNumber: false,
                    asc: true
                }
            })
        }
    }

    render(){
        const {
            Topleft,
            Bodytop,
            pagination=true,
            Thead,
            tbody,
            tbodyTop,
            rows,
            data,
            jumlahData = "",


        } = this.props
        const { 
            search, 
            pagingActive,
            showing, 
            start_page,
            order_by
        }  = this.state
        const { 
            sortData 
        } = this
      
        let paging                                  = pagingActive;
        
        let nomor                                   = paging;
        let next                                    = -2;
        let prev                                    = -2;
        let start_page_                              = start_page

        let fullList   = data.filter((v,i) => {
            let bagan_cari = JSON.stringify(v);
            return bagan_cari.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        let showing_              = parseInt(showing);
        let paging_render        = [];
        let max_paging           = Math.ceil(data.length / showing);
        let end_page             = max_paging;
       
        let prev_group           = -1;
        let next_group           = -1;
        let status_prev          = false;
        let lompat_pertama       = {
            index:0,
            next_group:0
        };
        let lompat_terakhir      = end_page;
        let index_terakhir       = {
            index:lompat_terakhir*(showing)-10,
            next_group:(lompat_terakhir-10 < 0) ? 0 : lompat_terakhir-10
        }
        let aktif = null
        for(let x = start_page_; x < start_page_+10;x++){
            let index  = x*(showing);    
            let active = (paging == index) ? "active" : "";

            if (paging != 0 && active != "active" && !status_prev) {
                prev = index;
            }else if (active == "active" && x != 0 && start_page_ == x) {
      
                prev  = {
                    index:(x / showing)-1,
                    next_group:start_page_-10
                }
            }
            if (active == "active") {
                aktif = x+1
                next   = -1;
                status_prev = true;
            }else if (next == -1) {
                next = index;
            }
            let blue                            = (active == "active") ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white  bg-slate-100 dark:bg-slate-900 border-none"
            paging_render[paging_render.length] = <div key={ x } onClick={(e) => this.handlePaging(e,index)} className={blue + "  w-10 h-10 text-center rounded-md cursor-pointer pt-2 ml-1"}> {x+1}</div>
                                                      
            if (x <= max_paging && x == start_page_+9) {
                next_group  = x+1;
                end_page    = paging+showing;

                if (next == -1 && active == "active") {
                    next = {
                        index:(x+1)*(showing),
                        next_group:next_group
                    }
                }
            }

            if (x >= max_paging-1) {
                next_group  = -1;
                end_page    = ((paging+showing-1) > fullList.length-1) ? fullList.length : paging+showing;
                
                if (active == "active") {
                    next        = -1;
                
                }
                break;
            }

        }
        if (start_page_ != 0) {
            prev_group  = start_page_-10;
            if (prev_group < -1) {
                prev_group = -1;
            }
        }
       if(order_by.key !== ""){
            fullList.sort((a, b) => {
                
                    let param_1 = (a[order_by.key] == null) ? "" : `${a[order_by.key]}`.toLowerCase().trim();
                    let param_2 = (b[order_by.key] == null) ? "" : `${b[order_by.key]}`.toLowerCase().trim();
                    
                    if (!isNaN(parseInt(param_1))) {
                        return (order_by.asc) ? parseInt(param_2) - parseInt(param_1): parseInt(param_1) - parseInt(param_2);
                    }
                    /* next line works with strings and numbers, 
                    * and you may want to customize it to your needs
                    */
                   let param = (order_by.asc) ? -1 : 1
                    var result = (param_1 < param_2) ? -1 : (param_1 > param_2) ? 1 : 0;
                    return result * param;
                
            })
       }
       const len = fullList.length 
        return (
            <div>
                <Header 
                    pagination = { pagination } 
                    Topleft    = { Topleft }
                    handleSearch = { this.handleSearch }
                    handleShowing = { this.handleShowing }
                />

                <div className="pb-4 rounded-md mt-2 overflow-x-scroll overflow-y-hidden">
                    { Bodytop }
                    <table className="w-full">
                        <thead>
                            <Thead 
                                sortedBy = { this.sortedBy }
                                order_by = { order_by }
                            />
                        </thead>
                       
                        <tbody>
                            {/* tbodyTop*/ }
                            {
                                (!pagination && data.length > 0) ?
                                    fullList.map(rows)
                                :
                                (pagination === true && fullList.length > 0) ?
                                    fullList.slice((paging <= 0) ? 0 : paging,paging+(showing)).map(rows)
                                :
                                    null
                            }
                            { tbody }
                        </tbody>
                        <tfoot>
                        
                        </tfoot>
                    </table>
                    
                </div>
                <div className="justify-between pt-2 pr-3 rounded-md mt-2 md:flex">
                        <div className="text-slate-700 dark:text-slate-50 text-sm text-center p-3">
                            {
                                jumlahData !== "" ?
                                <h5 className="pb-2">{ jumlahData }</h5>
                                :
                                (!pagination) ?
                                    <h5>{"Menampilkan " + 1 + " sampai " + len + " dari " + len + " baris"}</h5>
                                :
                                    <h5>{"Menampilkan " + (paging+1) + " sampai " + (end_page) + " dari " + len + " baris"}</h5>
                                            
                            }
                        </div>
                        <div className={`overflow-x-scroll md:overflow-hidden ${pagination ? "" : "hidden"}`}>
                            <div className="mb-3 justify-center sm:justify-end flex" >

                                {
                                    (paging == 0) ?
                                        null
                                    :
                                        <div onClick={(e) => this.handlePaging(e,lompat_pertama)} className="hover:bg-blue-500 cursor-pointer hover:border-blue-500 pl-3 pt-[10px] hover:text-white  bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md  text-gray-500">
                                            <ChevronDoubleLeftIcon className="w-5 h-5"/>
                                        </div>
                                }
                            {
                                (prev >=  0 || typeof prev == "object") ?
                                    <div onClick={(e) => this.handlePaging(e,prev)} className="hover:bg-blue-500 cursor-pointer pl-2 pt-[10px] hover:border-blue-500 hover:text-white  bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md  text-gray-500">
                                        <ChevronLeftIcon className="w-5 h-5"/>
                                    </div>
                                
                                    :
                                    <div className="hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer bg-slate-100 pl-2 pt-[10px] dark:bg-slate-900 border-none w-10 h-10  text-center rounded-md  text-slate-400">
                                        <ChevronLeftIcon className="w-5 h-5"/>
                                    </div>
                            }

                            {
                                (prev_group != -1) ?
                                    <div onClick={(e) => this.pindahGroup(e,prev_group)} className="hidden sm:block hover:bg-blue-500 cursor-pointer hover:text-white pt-[10px] bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md ml-1 text-gray-500">
                                        ...
                                    </div>
                                    : 
                                    null
                            }
                            <div className="hidden sm:flex ">
                                { paging_render }                            
                            </div>
                            <div className=" sm:hidden  pt-[10px] bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md ml-1 text-gray-500">
                                { aktif }
                            </div>
                            {
                                    (next_group != -1) ?
                                        <div onClick={(e) => this.pindahGroup(e, next_group)} className="hidden sm:block hover:bg-blue-500 cursor-pointer hover:text-white hover:border-blue-500  pt-[10px] bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md ml-1">
                                            ...
                                        </div>
                                    :
                                    null
                            }
                                {
                                    (next >= 0 || typeof next == "object") ?
                                        <div onClick={(e) => this.handlePaging(e,next)} className="hover:bg-blue-500 cursor-pointer hover:text-white hover:border-blue-500 pl-3 pt-[10px] bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md ml-1 text-gray-500">
                                            <ChevronRightIcon className="w-5 h-5"/>
                                        </div>
                                
                                        :
                                        <div className="hover:bg-blue-500 hover:text-white cursor-pointer hover:border-blue-500 pl-3 pt-[10px] bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md ml-1 text-slate-400">
                                            <ChevronRightIcon className="w-5 h-5"/>
                                        </div>
                                }
                                {
                                    (next >= 0 || typeof next == "object") ?
                                        <div onClick={(e) => this.handlePaging(e,index_terakhir)} className="hover:bg-blue-500 cursor-pointer hover:border-blue-500 pl-3 pt-[10px] hover:text-white  bg-slate-100 dark:bg-slate-900 border-none w-10 h-10 text-center rounded-md ml-1 text-gray-500">
                                            <ChevronDoubleRightIcon className="w-5 h-5" />
                                        </div>
                                        :
                                        null
                                }
                                
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export const ColSort = ({ onClick, className, children, rowSpan, colSpan, status="" }) => {
    return (
        <td onClick={ onClick } rowSpan={ rowSpan } colSpan={ colSpan } className={ className }>
        <div className="flex gap-1 hover:opacity-70 cursor-pointer">
            <div>
                    { children }        
                </div>
                <div className="w-4 pt-1">
                    {
                        status === "" ?
                        <ArrowsUpDownIcon />
                        :
                        status === "asc" ?
                        <ArrowUpIcon />
                        : 
                        status === "desc" ?
                        <ArrowUpIcon className="rotate-180" />
                        :
                        null
                    }
                </div>
        </div>
        
        </td>
    )
}

export const Header = ({ Topleft, pagination, handleSearch, handleShowing }) => {
    return (
        <div className=" mt-2 w-full rounded-md overflow-auto ">
            <div className="lg:flex gap-2 ">
                <div className="lg:w-[20%]">
                        { 
                            pagination === true ?
                            <div className="flex">
                                <div className="text-sm text-center p-2 text-slate-700 dark:text-slate-50 bg-slate-100 border-[1px] px-6 rounded-l-md">
                                    Showing
                                </div>
                                <div className="w-full grow">
                                    <select onChange = { handleShowing } className="text-sm w-full lg:w-24 border-[1px] border-slate-200 rounded-r-md border-l-[0px] ">
                                        <option value="10">10</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="500">500</option>
                                    </select>
                                </div>
                            </div>
                            : null
                        }
                </div>
                <div className="w-full lg:w-[50%]">
                    { Topleft }   
                </div>
                <div className="w-full lg:w-[30%] pt-2 lg:pt-0">
                    <div className="flex">
                        <div className="text-sm text-center p-2 text-slate-700 dark:text-slate-50 bg-slate-100 border-[1px] px-6 rounded-l-md">
                            Search
                        </div>
                        <div className="grow">
                            <input onChange = { handleSearch } className="text-sm focus:ring-[0px] focus:border-slate-300 focus:outline-0 border-[1px] border-slate-200 w-full border-l-[0px] p-2 rounded-r-md"/>  
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Datatable