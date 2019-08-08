import axios from "axios"
import {GET_ERRORS,GET_COMPTE} from "./types"
import { async } from "q";


export const creacteDemande = (demande, history) => async dispatch =>{
   
        const res= await axios.post("http://localhost:8080/api/demande/ajouter",demande)
        
   
}

export const getcomptes = () => async dispatch =>{
    
        const res= await axios.get("http://localhost:8080/api/demande/all/accounts?username=Hanb")
    
        dispatch({
            type:GET_COMPTE,
            payload:res.data
        })
    
}