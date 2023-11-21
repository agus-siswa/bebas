import { ucwords } from './Value'
import * as Form  from '../components/Forms'
const BuildForm = (obj) => {
        
        let data = []
        for(let i in obj){
            const g = obj[i]
            // get name 
            const name = i.split("_").map((x) => {
                return ucwords(x)
            }).join(" ")
            // bukan children
            if(g.type === undefined){
             //   console.log(g)
            }else{
                const tipe = g.type.toLowerCase()
                // jika tipe string
                if(tipe === "string"){
                    data.push(<Form.Text title={ name }  key={ i } required = { g.required }/>)
                }else if(tipe === "date"){
                    data.push(<Form.Text title={ name }  key={ i } required = { g.required } type="date" />)
                }else if(tipe === "number"){
                    data.push(<Form.Text title={ name }  key={ i } required = { g.required } type="number" />)
                }
            }
        }
        return data   
    }

export default BuildForm