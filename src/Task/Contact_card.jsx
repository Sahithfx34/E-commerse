import { Delete } from "@mui/icons-material"

const Contact_card = ({data,onDelete}) => {
    
  return (
    <div>
        {
        data.map((item,i)=>(
            <div key={i}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <Delete onClick={()=>onDelete(item.name)}/>
            </div>
        ))
        }

    </div>
  )
}

export default Contact_card