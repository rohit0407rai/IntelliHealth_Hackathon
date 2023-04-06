import React,{useEffect,useState} from 'react'
import axios from 'axios';



const options = {
    method: 'GET',
    url: 'https://medicine-autocomplete-indian-brands.p.rapidapi.com/api/medicine/search',
    params: {searchterm: 'para'},
    headers: {
      'X-RapidAPI-Key': '1f4b1aa01dmshc0e3a5d4eb353c3p1d3724jsn19a002937eb8',
      'X-RapidAPI-Host': 'medicine-autocomplete-indian-brands.p.rapidapi.com'
    }
  };
const Medicines = () => {
    const [Medicines,setMedicines] = useState();
    useEffect(() =>{

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        },[]);
    })
  return (
    <div>
      <h1>Medicines</h1>
      
    </div>
  )
}

export default Medicines
