import React from 'react'
import './folding.css'

export default function Folding() {
    const card_height = '15rem';
    const card_width = '20rem';
    document.documentElement.style.setProperty('--card-height',card_height)
    document.documentElement.style.setProperty('--card-width',card_width)
    return (
        <div className='wrapper' >
            <div className="top one"></div>
            <div className="top two"></div>
            <div className="right one"></div>
            <div className="right two"></div>
            <div className="left one"></div>
            <div className="left two"></div>
            <div className="quote">
            <form id="form" className='submit'>
                    <div className='form_container'>
                        <div className="name">
                            <label htmlFor="from_name">Name*</label>
                            <input type="text" name="from_name" id="from_name" className='form-control'required />
                        </div>
                        <div className="mail">
                            <label htmlFor="reply_to">E-mail*</label>
                            <input type="text" name="reply_to" id="reply_to" className='form-control'  required />
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message*</label>
                            <input type="text" name="message" id="message" className='form-control'  required />
                        </div>
                        <div className='request' >
                            <input type="submit" className='submit_btn' id='button' />
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="glass"></div> */}
        </div>
    )
}
