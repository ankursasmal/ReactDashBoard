import React from 'react'
import { IoCardOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import style from './CardSection.module.css'
import { FaRupeeSign } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function CardSection() {
  return (
    <div> 
    <div className={`${style.card_body}`}>
      <div className={`${style.card_head}`} >
        <div className={`${style.card_button}`}  >
          <IoCardOutline style={{ width: '2.2vw', height: '2vw' }} />

          <a className={`${style.my_card}`} > My card</a>
        </div>
        <div className={`${style.my_card_button}`}  >
          <a style={{ fontSize: '1.5vw' }}>+</a>
          <a className={`${style.add_card}`}  >Add card</a>
        </div>

      </div>

      {/* card */}
      <div className={`${style.card}`}  >
        <a className={`${style.kley}`}   >Kley card</a>
        <div className={`${style.Edit}`}   >
          <a className={`${style.card_no}`}   >100-1244-1255-325</a>
          <MdOutlineRemoveRedEye style={{ fontSize: '1.7vw' }} />
        </div>

        {/* expire date part*/}
        <div className={`${style.cardname}`}   >
          <div className={`${style.card_namecol}`}   >
            <a style={{ fontSize: '1.2vw' }}>Hidaytama Irsadanar</a>

            {/* cvv section */}
            <div className={`${style.cvv}`}  >
              <div className={`${style.exp}`}  >
                <a style={{ fontSize: '1.1vw', paddingRight: '.5vw' }}>Exp</a>
                <a style={{ fontSize: '1.1vw' }}>09/25</a>
              </div>
              <div className={`${style.card_cvc}`}   >
                <a style={{ fontSize: '1.1vw' }}>CVC</a>
                <a className={`${style.card_cvc_no}`}   >234</a>
              </div>
            </div>

          </div>
          {/* two circle */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`${style.card_logo1}`}   ></div>
            <div className={`${style.card_logo2}`}   ></div>
          </div>
        </div>

      </div>


      {/* belling */}
      <div className={`${style.belling}`}  >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RiContactsBookLine className={`${style.belling_logo}`} />
          <div className={`${style.belling_add}`}    >
            <a style={{ fontSize: '1.3vw', fontWeight: '600' }}>Billing addres</a>
            <a style={{ fontSize: '1vw', fontWeight: '300' }}>123 Main St, Apt 4B Springfield</a>
          </div>

        </div>
        <div className={`${style.belling_edit}`}   >
          <GoPencil style={{ fontSize: '1.3vw', height: '1.2vw' }} />
          <a className={`${style.belling_edit_button}`}  >Edit</a>
        </div>
      </div>

      {/* for progress section */}
      <div className={`${style.progress}`}   >
        <div className={`${style.progress_header}`}   >
          <a style={{ fontSize: '1.3vw', fontWeight: '600', }}>Spending Limits</a>

          <div className={`${style.horizental_line}`}   ></div>

          {/* two progress circle */}
          <div className={`${style.circle1}`}   >
            {/* frist progress */}
            <div className={`${style.frist_progress}`} >
              <div className='ber'></div>
              <div className={`${style.frist_progress_div}`}   >
                <a className={`${style.transactions}`}>Per transactions</a>
                <a className={`${style.rs}`}   >Rp 100.000,00</a>
              </div>
            </div>
            {/* vertial ber */}
            <div style={{ width: '1px', height: '4vw', backgroundColor: 'black' }}></div>

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


      {/* ammount section */}
      <div style={{display:'flex',padding:'1.3vw',flexDirection:'column',border:'1px solid black',borderRadius:'1vw',marginTop:'1.5vw',width:'100%'}}>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<div style={{display:'flex',alignItems:'center',}}>
<FaRupeeSign style={{width:'1.2vw',height:'1.3vw'
}}/>
<a style={{fontSize:'1.2vw',fontWeight:'500'}}> Available Fund</a>
</div>
<div>
  <a style={{padding:'3px 6px',border:'1px solid black',borderRadius:'.5vw'}}>Account Detail</a>
</div>
</div>

<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<a style={{fontSize:'1.2vw',fontWeight:'600'}}>Rp282832</a>
<div style={{display:'flex',alignItems:'center',marginTop:'1.2vw',marginBottom:'1vw'}}>
<a>...456</a>
<MdOutlineRemoveRedEye style={{ fontSize: '1.1vw' }} />

</div>
</div>

<div style={{height:'1px',width:'100%',backgroundColor:'black'}}></div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'1vw'}}>
<div style={{display:'flex',alignItems:'center',}}>
<IoIosSend style={{width:'1.2vw',height:'1.3vw'
}}/>
<a style={{fontSize:'1.2vw',fontWeight:'500'}}> Resent Transper </a>
</div>
<div>
  <a style={{padding:'3px 6px',border:'1px solid black',borderRadius:'.5vw'}}>See All</a>
</div>  


   </div>

   {/*names   */}

   <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'1.2vw'}}>
   <div style={{display:'flex',alignItems:'center'}}> 

<div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'2.5vw',height:'2.5vw',backgroundColor:'blue',borderRadius:'50%'}}>
    <a style={{fontSize:'1vw',color:"white"}}>CC</a> 

    </div>
 <div style={{display:'flex',flexDirection:'column',alignItems:'self-start',marginLeft:'.5vw'}}>
<a style={{fontSize:'1vw'}}>Names</a>
<a>03/04/20</a>
 </div>

   </div>

   <div style={{display:'flex',flexDirection:'column',alignItems:'self-start'}}>
<a style={{fontSize:'1vw'}}>-RP88222</a>
<a>Investment</a>
 </div>
   </div>
   </div>
     </div>
  )
}

export default CardSection
