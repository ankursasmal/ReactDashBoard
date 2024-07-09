import React, { useRef } from 'react'
import '../App.css'
import { FaRegClock } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import style from './TableSection.module.css'
import TableRow from './TableRow';

function TableSection() {
    let inputBg=useRef('');

  return (
    <div className={`${style.transition}`} >
    <div style={{display:'flex',alignItems:'center'}}>
    <FaRegClock style={{ fontSize:'2vw',height:'1.8vw'}}/>
    <a className={`${style.transition_heading}`}  >Transaction History</a>
    </div>
    
    {/* trengition table */}
    
    <table id="table1">
      <thead>
        <tr>
          <th>
            <div onClick={() => inputBg.current.style.backgroundColor = "blue"}>
              <input   type="radio" ref={inputBg} className='option-input' style={{backgroundColor:'white'}}/>
            </div>
          </th>
          <th>
            <div className={`${style.table_headDiv}`}  >
              <span className={`${style.table_head_name}`} >Date</span> 
              <MdKeyboardArrowDown className={`${style.logo}`}  />
            </div>
          </th>
          <th>
            <div className={`${style.table_headDiv}`}>
              <span className={`${style.table_head_name}`}>Time</span> 
              <MdKeyboardArrowDown className={`${style.logo}`}/>
            </div>
          </th>
          <th>
            <div className={`${style.table_headDiv}`}>
              <span className={`${style.table_head_name}`}>Description</span> 
              <MdKeyboardArrowDown className={`${style.logo}`}/>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>

      </tbody>
    </table>
      </div>
  )
}

export default TableSection
