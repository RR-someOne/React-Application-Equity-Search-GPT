import React from "react"
import {Link} from "react-router-dom"
import "../HomePageHeaderAndFooter/SearchPageFooter.css"

const SearchPageFooter = () =>
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/stockPal/home' className='social-logo'>
                        StockPal
                        <i className='fab fa-typo3'/>
                    </Link>
                </div>
                <small className='website-rights'>StockPal © 2020</small>
            </div>
        </section>
    </div>

export default SearchPageFooter
