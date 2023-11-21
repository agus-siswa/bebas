export const DefaultText = () => {
    return (
        <div className="flex w-full">
            <div className="p-3 bg-slate-100 rounded-l-md border-[1px] text-slate-600">Keterangan</div>
            <input type="text" className="rounded-r-md focus:ring-[0px] text-sm focus:border-slate-300 border-[1px] border-slate-200 w-full border-l-[0px]" />
        </div>
    )
}

export const Text = ({
    title,
    type="text",
    required
}) => {
    return (
        <div className="mb-2">
            <div className="text-slate-700 pl-[3px] mb-1 text-sm">
                { title }
                {
                    required ? 
                        <span className="text-red-500">*</span>
                    : 
                        null
                }
            </div>
            <input type={ type } className="rounded-md bg-slate-100 focus:ring-[0px] text-sm focus:border-slate-300 border-[1px] border-slate-200 w-full " />
        </div>
    )
}

export const Select = ({ title, list }) => {
    return (
        <div className="mb-2">
            <div className="text-slate-700 pl-[3px] mb-1 text-sm">
                { title }
            </div>
            <select className="rounded-md bg-slate-100 focus:ring-[0px] text-sm focus:border-slate-300 border-[1px] border-slate-200 w-full ">
                {
                    list.map((x, i) => {
                        return (
                            <option key={ i } value={ x }>{ x }</option>
                        )
                    })
                }

            </select>
            
        </div>
    )
}