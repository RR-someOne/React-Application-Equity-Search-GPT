import React from "react"
import {Link} from "react-router-dom"

const HomePageFooter = () =>
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the newsletter to receive stock updates and tips
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    {/*<button buttonStyle='btn--outline'>Subscribe</button>*/}
                    <button className="btn btn-outline-light">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
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

export default HomePageFooter
