import { useNavigate } from 'react-router-dom'

function Homepage(){
    const navigate = useNavigate()
    return <div>
     <div style={{display:'flex',fontSize:'x-large',marginLeft: 2,justifyContent:'center',marginTop:'60px',color:'black'}}>
    <h2>It's the food and groceries you love, <br/> delivered</h2>   
    <img style={{marginRight: 1}} width={500} src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1264"/>
    </div>
    <h2 style={{marginLeft:'15px'}}>Find us in these cities and many more!</h2>
    <div style={{display:'flex'}}>
        <div style={{border:'1px solid lightgrey', width:'33%',marginRight:'10px'}}>
            <img width='100%' height={300} src="https://res.cloudinary.com/www-travelpakistani-com/image/upload/v1660545409/Mazar-e-Quaid.jpg"/><br/>
             <center><button style={{width:'150px',padding:'8px',fontSize:'20px',borderRadius:'10px',marginBottom:'10px', marginTop: '10px'}} onClick={()=> navigate('/dashboard')}>Karachi</button></center>
        </div>
        <div style={{border:'1px solid lightgrey', width:'33%',marginRight:'10px'}}>
            <img width='100%' height={300} src="https://res.cloudinary.com/raastay/images/f_auto,q_auto/v1656766107/Badshahi-Mosque-1/Badshahi-Mosque-1.jpeg?_i=AA"/><br/>
            <center><button style={{width:'150px',padding:'8px',fontSize:'20px',borderRadius:'10px',marginBottom:'10px', marginTop: '10px'}} onClick={()=> navigate('/dashboard')}>Lahore</button></center>
        </div>
        <div style={{border:'1px solid lightgrey', width:'33%',marginRight:'10px',marginLeft:'10px'}}>
            <img width='100%' height={300} src="https://res.cloudinary.com/www-travelpakistani-com/image/upload/v1661243930/Faisal_Mosque_travelpakistani.jpg"/><br/>
            <center> <button style={{width:'150px',padding:'8px',fontSize:'20px',borderRadius:'10px',marginBottom:'10px', marginTop: '10px'}} onClick={()=> navigate('/dashboard')}>Islamabad</button></center>
        </div>
      
    </div>
    </div>
    
}

export default Homepage