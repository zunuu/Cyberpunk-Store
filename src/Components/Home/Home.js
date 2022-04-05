import React from 'react';
import Image from '../../pexels-chevanon-photography-312418.jpg'
import './Home.css'
const Home = () => {
    return (
        <section className='container  m-0 mx-auto p-0  d-flex row mt-2'>
            <div className='mt-5 col-xl-8 col-lg-7 m-0 p-0 col-md-12 col-sm-12 col-12 d-flex align-items-center'>
                <div className='text-start '>
                    <h2 className='dip'>Your Next Dip</h2>
                    <h2 className='sip'>Your Best Sip</h2>
                    <p className='w-50'>
                        Just fade away your monotony in a single sip.A great Coffee contain huge amount of cafeine {"&"} helps to  Dip dive into the ultimate freshness
                    </p>
                    <button className='sip-now-btn'>
                        Buzz Now!
                    </button>

                </div>

            </div>


            <div className='mt-5  col-xl-4 col-lg-3 m-0 p-0 col-md-10 col-sm-10 col-10 align-items-center'>
                <img src={Image} className="Home-image" alt="" />
            </div>
        </section>
    );
};

export default Home;