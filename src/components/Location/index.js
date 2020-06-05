import React from 'react'

const Location = () => {
    return(
        <div className='location_wrapper'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4968.403697233403!2d-0.19825487080445267!3d51.491163298691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f8b593ccde9%3A0xbc7282217d8f10fc!2sEarl&#39;s%20Court%2C%20London%2C%20UK!5e0!3m2!1sen!2smx!4v1591397839515!5m2!1sen!2smx" 
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title='GMaps'
                ></iframe>
            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location