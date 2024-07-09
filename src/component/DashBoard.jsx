import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { RiExpandUpDownLine } from "react-icons/ri";
import SlideOption from './SlideOption';
import { IoCardOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { HiHomeModern } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";
import { TbPackageExport } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import SlideDiv from './SlideDiv';

import style from './DashBoard.module.css'


function DashBoard() {
  return (
    <>
      {/* nav of dashbord */}
      <div className={`${style.dash_heading}`} >
        <div className={`${style.logo}`}  >
          <div className={`${style.logo}`}  >
            <div className={`${style.logo1}`}  ></div>
            <div className={`${style.logo2}`}  ></div>
          </div>
          <a className={`${style.kley}`}  >kley.</a>

        </div>
        <div>
          <MdOutlineSpaceDashboard style={{ width: '29px', height: '36px' }} />

        </div>
      </div>

      {/* bashbored other */}
      <div className={`${style.horizental_div}`}  ></div>

      {/* image */}
      <div className={`${style.admin_section}`}  >

        <div className={`${style.auth_detail}`}  >
          <div className={`${style.logo}`} >
            <img className={`${style.img_auth}`} src="https://i.pinimg.com/736x/8f/6a/55/8f6a55bd3df4bb179dd87cefcabcab30.jpg" alt="" />
            <div className={`${style.auth_name}`} >
              <a className={`${style.auth_name1}`} >Hidaytama Irsada</a>
              <div className={`${style.logo}`}  >
                <MdInbox style={{ width: '1.5vw', height: '1.4vw' }} />
                <a style={{ fontSize: '1.4vw', fontWeight: '500', }}>Tokomedia</a>
              </div>
            </div>
          </div>
          <RiExpandUpDownLine style={{ width: '29px', height: '36px' }} />
        </div>
      </div>
      {/* 2nd line */}
      <div className={`${style.horizental_line2}`}  ></div>

      <div className={`${style.dash_option}`}  >
        <a className={`${style.division1}`}  >General</a>
        <SlideOption name='Overview' icons={MdOutlineSpaceDashboard} />
        <SlideOption icons={IoCardOutline} name='My cards' />
        <SlideOption name=' Transfer' icons={FaArrowRightArrowLeft} />
        <SlideOption name='Transactions' icons={FaArrowRightArrowLeft} />
        <SlideDiv name='Payments' icons={FaHandHoldingUsd} number={12} />
        <SlideOption name='Exchange' icons={RiExchangeDollarLine} />

        <a className={`${style.division2}`}  >Industry</a>


        <SlideOption name='Manufacturing' icons={HiHomeModern} />
        <SlideDiv name='Marketing' icons={GrAnnounce} number={132} />
        <SlideOption name='Export / Import' icons={TbPackageExport} />
        <a className={`${style.division3}`}  >Product</a>



        <SlideOption name='Debit cards' icons={IoCardOutline} />
        <SlideOption name=' Foreign exchange' icons={RiExchangeDollarLine} />
        <SlideOption name='Multi currency account' icons={MdPeopleOutline} />

      </div>

    </>
  )
}

export default DashBoard
