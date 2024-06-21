import React, { useState } from 'react'
import './calc.css'

export default function Calc() {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const handleFrom = (e) => {
        setFrom(e.target.value)
    }

    const handleTo = (e) => {
        setTo(e.target.value)
    }

    const get_Details = () => {
        if (from === 'miyapur' && to === 'uppal') {
            alert('')
        }
    }

    return (
        <div className='mainContainer'>
            <div className="container">
                <div className="station_From">
                    <label htmlFor="station_1">From</label>
                    <select className="station_1" id="station" onChange={handleFrom}>
                        <option value="default" disabled>Metro station 1</option>
                        <option value="miyapur">Miyapur</option>
                        <option value="kukatpally">Kukatpally</option>
                    </select>
                </div>
                <div className="station_To">
                    <label htmlFor="station_2">To</label>
                    <select className="station_2" id="station" onChange={handleTo}>
                        <option value="uppal">Uppal</option>
                        <option value="nagole">Nagole</option>
                    </select>
                </div>
                <button className='get_details' onClick={get_Details}>Get details</button>
            </div>
        </div>
    )
}
