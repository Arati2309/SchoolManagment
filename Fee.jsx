import react from "react";
import './FeeCSS.css'
import './FeeStructure'
import payonline from './payonline.png'
import Feereceipt from './Feereceipt.png'
import Otherfee from './Otherfee.webp'
import feeStructureimg from './feeStructureimg.jpg'
import feeReceiptimg from './feeReceiptimg.webp'
import { Link } from "react-router-dom"

const Fee = () => {
  return (
    <>
    
    <div className='Head'>
        <h2>Fee</h2>
    </div>

    <a href= {feeStructureimg} id="a1">
    <div className="box" >
        <img src={Otherfee} alt="ICON" className="img" id="img1" />
        <h3>Fees Structure</h3> 
    </div>
    </a>

    <a href="" id="a2">
    <div className="box" >
     <img src={payonline} alt="ICON" className="img" id="img2" />
        <h3>Pay Online</h3>   
    </div>
    </a>

    <a href={feeReceiptimg} id="a3">
    <div className="box" >
        <img src={Feereceipt} alt="ICON" className="img" id="img3" />
        <h3>Fee Receipt</h3>
        
    </div>
    </a>

   
    </>

    
  )
}


export default Fee