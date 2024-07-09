import React, { useRef } from 'react'
import '../App.css'
import CardSection from './CardSection';
import TableSection from './TableSection';
import { PiCardsThree } from "react-icons/pi";
import style from './MainPage.module.css'

function MainPage() {

  return (
    <div className={`${style.MainPgae}`}  >
      {/* nav part */}
      <div className={`${style.mainHeading}`}  >
        <a className={`${style.Transactions}`}  >Transactions</a>
        <a className={`${style.review}`}  >Review and manage all your money transfers in one place</a>
      </div>

      <div className={`${style.route_option}`}  >
        <a className={`${style.routers}`}  >Overview</a>
        <a className={`${style.routers}`}  >Transactions</a>
        <a className={`${style.routers}`} >Cards</a>
        <a className={`${style.routers}`}  >Recurring transactions</a>

      </div>

      {/* input */}

      <div style={{ padding: '2.3vw' }}>
        <div className={`${style.MainPage_input}`}  >

          <div className={`${style.seletct_option}`}  >
            <PiCardsThree style={{ width: '2vw', height: '1.7vw' }} />
            <select className={`${style.verious_options}`} name="" id=""  >
              <option value="">All categories</option>
              <option value="">All categories</option>
              <option value="">All categories</option>
              <option value="">All categories</option>

            </select>
          </div>
          <div className={`${style.horidental_line}`}  ></div>
          <input className={`${style.search_input}`} type="text" placeholder='Search' />

        </div>


        {/* // card and transition grid */}
        <div className={`${style.Main_grid}`}  >
          {/* for cards sections */}
          <CardSection />
          {/* for trensition sections */}
          <TableSection />

        </div>
      </div>
    </div>
  )
}

export default MainPage
