import React, { useEffect } from 'react';

export const Btn = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [])

    return (
        <div>
            <button
                data-tf-popup="rwXqKtnt"
                data-tf-iframe-props="title=AWS re/Start "
                data-tf-hidden="utm_source=xxxxx,utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx"
                className='btn'
            >
                ¡Contáctanos!
            </button>
        </div>
    )
}
