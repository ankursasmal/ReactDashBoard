import React, { useRef } from 'react'
import '../App.css'
function TableRow() {
    let inputBg = useRef('');

    return (
        < >
            <tr>
                <td onClick={() => inputBg.current.style.backgroundColor = "blue"}>
                    <input type="radio" ref={inputBg} className='option-input' />
                </td>
                <td className="table_row"  >11/09/24</td>
                <td className="table_row">13:45:59</td>
                <td className="table_row">Money Transfer</td>
                <td className="table_row">Rp123</td>

                <td className="table_row">Progress</td>

            </tr>
        </>
    )
}

export default TableRow
