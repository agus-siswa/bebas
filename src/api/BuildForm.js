import { ucwords } from './Value'
const BuildForm = (obj) => {
    
    for(let i in obj){
        // get name 
        const name = i.split("_").map((x) => {
            return ucwords(x)
        }).join(" ")
        console.log(name)
    }
}

export default BuildForm