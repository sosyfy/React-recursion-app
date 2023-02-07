import { useEffect,useState } from "react";
import Option from "./Option";
import data from './data.json'
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Main(){

    
    const [sectors, setSectors] = useState([])
    const [fullname, setFullname] = useState('')
    const [error, setError] = useState(null)
    const [acceptTerms , setAcceptTerms] = useState(false)
    
    const navigate = useNavigate()
  
    useEffect(() => {
        if(localStorage.hasOwnProperty("userData")){
            let data = localStorage.getItem('userData')
            data = JSON.parse(data)
            setSectors(data.sectors)
            setFullname(data.name)
            setAcceptTerms(data.agreeToTerms)
            // setUserData(JSON.parse(data))
          }
     // mock api call
      let config = {
        url: '/sections',
        method: "get",
        baseURL: 'https://some-domain.com/api',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
      }
  
    //   axios(config).then((res)=>{
    //      // do something here 
    //     //  sectors = res.data 
    //   }).catch((error)=>{
    //      setError(error.message)
    //   })
    }, [])
  
  
    const handleSubmit = ( event )=>{
       event.preventDefault()
    
  
       let data = JSON.stringify({
          name: fullname,
          sectors: sectors,
          agreeToTerms: acceptTerms
       })
  
       let config = {
         url: '/register',
         method: "POST",
         baseURL: 'https://some-domain.com/api',
         headers: {'X-Requested-With': 'XMLHttpRequest'},
         data: data
       }
  
    //    axios(config).then((res)=>{
    //       // do something here 
    //    }).catch((error)=>{
    //       setError(error.message)
    //    })
       
       localStorage.setItem('userData', data)

       navigate('/info') 
    }
  
    return (
      <div className="main">
        <div className='section-wrapper'>
          <form onSubmit={(e)=> handleSubmit(e)}>
          <h1 className="heading"> Welcome</h1>
          <h1 className="sub-heading"> Please enter your name and pick the Sectors you are currently involved in.</h1>
          <div className="name-field">
            <span>Full Name <strong>*</strong></span>
          <input type="text" value={fullname} onChange={ e => setFullname(e.target.value )} required  />
          </div>
          <div className="sectors-field-wrapper">
            <h1 >Sector <strong>*</strong></h1>
            <div className="sectors-field">
            {data.map(option => (
              <Option option={option} sectors={sectors}  setSectors={setSectors} depth={1} key={option.id + option.label} />
            ))}
            </div>
          </div>
          <div className="terms-field">
            <input type="checkbox" name="checkbox" id="checkbox" onChange={()=>setAcceptTerms(!acceptTerms)} checked={acceptTerms} required />
            <label htmlFor="checkbox">Agree to terms </label>
          </div>
          { error !== null && 
             <div className="error-box">
                { error }
             </div>
          }
          <button type="submit" className='submit-button'>save</button>
          </form>
        </div>
      </div>
    )
}