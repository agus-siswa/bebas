export const Th = ({ children }) => {
    return (
        <td className="border-[1px] border-slate-200 bg-slate-100 p-2 text-sm">
            { children }
        </td>
    )
}

export const Td = ({ children, bw }) => {
    return (
        <td className={`${bw ? "bg-slate-100" : ""} border-[1px] border-slate-200 p-2 text-sm`}>
            { children }
        </td>
    )
}