import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Home() {
    const [crypto, setcrypto] = useState([])
    // const [dat, setdat] = useState([])
    const getcrypto = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=bitcoin,ethereum,matic-network,dogecoin,solana").then(res => res.json()).then(data => { setcrypto(data); console.log(data) })
    }
    useEffect(getcrypto, [])

    return (<div className='container'>
        <div className="row">
            {/* <div className="col-md-4">
                {crypto[0]?.id} - {crypto[0]?.current_price}
            </div>
            <div className="col-md-4">
                {crypto[1]?.id} - {crypto[1]?.current_price}
            </div> */}
            <div className="col-md-4 offset-md-3 mb-2">
                <h4>Coins</h4>
            </div>
            {
                crypto.map(item =>
                    <div className="mt-3 col-md-6 offset-md-3 d-flex justify-content-center vertical-align-center align-items-center">
                        <img className="me-3" src={item.image} width={40} height={40} />
                        <span className=' col-md-9 ml-3' style={{fontSize:20,fontFamily:'Monospace'}}> {item.name} - ₹{item.current_price}</span>
                    </div>
                )
            }
        </div>

    </div>)
}
