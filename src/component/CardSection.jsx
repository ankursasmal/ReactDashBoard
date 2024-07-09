import React from 'react'
import { IoCardOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
 import style from './CardSection.module.css'
function CardSection() {
  return (
    <div  className={`${style.card_body}`}>
     <div className={`${style.card_head}`} >
    <div className={`${style.card_button}`}  >
    <IoCardOutline style={{width:'2.2vw',height:'2vw'}}/>
    
    <a  className={`${style.my_card}`} > My card</a>
    </div>
    <div className={`${style.my_card_button}`}  >
      <a style={{ fontSize:'2.2vw'}}>+</a>
      <a className={`${style.add_card}`}  >Add card</a>
    </div>
     
    </div>
    
    {/* card */}
    <div className={`${style.card}`}  >
     <a className={`${style.kley}`}   >Kley card</a>
     <div className={`${style.Edit}`}   >
      <a className={`${style.card_no}`}   >100-1244-1255-325</a>
      <MdOutlineRemoveRedEye style={{fontSize:'2.1vw'}}/>
     </div>
    
     {/* expire date part*/}
     <div className={`${style.cardname}`}   >
      <div className={`${style.card_namecol}`}   >
     <a style={{fontSize:'1.7vw'}}>Hidaytama Irsadanar</a>
    
     {/* cvv section */}
     <div className={`${style.cvv}`}  > 
     <div className={`${style.exp}`}  >
    <a  style={{fontSize:'1.3vw',paddingRight:'.5vw'}}>Exp</a>
     <a style={{fontSize:'1.3vw'}}>09/25</a>
     </div>
     <div className={`${style.card_cvc}`}   >
    <a style={{fontSize:'1.3vw'}}>CVC</a>
     <a className={`${style.card_cvc_no}`}   >234</a>
     </div>
     </div>
    
    </div>
    {/* two circle */}
    <div    style={{display:'flex',alignItems:'center'}}> 
    <div className={`${style.card_logo1}`}   ></div>
    <div className={`${style.card_logo2}`}   ></div>
    </div>
    </div>
    
    </div> 
    
    
    {/* belling */}
    <div className={`${style.belling}`}  >
     <div   style={{display:'flex',alignItems:'center'}}>
     <RiContactsBookLine className={`${style.belling_logo}`}   />
     <div className={`${style.belling_add}`}    >
    <a  style={{fontSize:'1.4vw',fontWeight:'600'}}>Billing addres</a>
     <a   style={{fontSize:'1.2vw',fontWeight:'300'}}>123 Main St, Apt 4B Springfield, IL 62704</a>
    </div>
    
    </div>
    <div className={`${style.belling_edit}`}   >
    <GoPencil  style={{ fontSize:'1.8vw',height:'1.6vw'}}/>
      <a className={`${style.belling_edit_button}`}  >Edit</a>
    </div>
    </div>
     
    {/* for progress section */}
    <div className={`${style.progress}`}   >
    <div className={`${style.progress_header}`}   >
      <a    style={{fontSize:'1.4vw',fontWeight:'600',}}>Spending Limits</a>
    
    <div className={`${style.horizental_line}`}   ></div>
    
    {/* two progress circle */}
    <div  className={`${style.circle1}`}   >
    {/* frist progress */}
    <div className={`${style.frist_progress}`} >
    <div   className='ber'></div>
    <div className={`${style.frist_progress_div}`}   >
    <a className={`${style.transactions}`}>Per transactions</a>
    <a className={`${style.rs}`}   >Rp 100.000,00</a>
    </div>
    </div>
    {/* vertial ber */}
    <div  style={{width:'1px',height:'6vw',backgroundColor:'black'}}></div>
    
    {/* 2nd progress */}
    <div className={`${style.circle2}`}  >
    <div className='ber1'></div>
    <div className={`${style.second_progress}`}   >
    <a className={`${style.transactions}`}   >Per transactions</a>
    <a className={`${style.rs}`}   >Rp 100.000,00</a>
    </div>
    </div>
    
    </div>
    </div>
    </div>
 
      </div>
  )
}

export default CardSection
