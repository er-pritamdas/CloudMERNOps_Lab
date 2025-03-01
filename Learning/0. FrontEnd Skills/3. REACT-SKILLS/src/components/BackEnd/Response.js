import axios from 'axios'
axios.get("http://localhost:3000/jokes")
.then((response)=>{
    console.log(response)
    console.log(response.data )
})