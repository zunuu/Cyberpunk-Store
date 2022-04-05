import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import Image from '../../pexels-chevanon-photography-312418.jpg'
import User from '../User/User';
import './Home.css'
const Home = () => {
    const [users, setUsers] = useUsers()
    const navigate = useNavigate();
    const showAllReviews = () => {
        const path = '/reviews';
        navigate(path)


    }
    return (
        <div>
            <section className='container  m-0 mx-auto p-0  d-flex row mt-2'>
                <div className='mt-5  col-xl-8 col-lg-7 m-0 p-0 col-md-12 col-sm-12 col-12 d-flex align-items-center'>
                    <div className='text-start '>
                        <div className='siteName fs-1 align-items-center'>
                            <h1 >Caf<span>é</span> Buzzer </h1>

                        </div>
                        <h2 className='dip'>Your Next Dip</h2>
                        <h2 className='sip'>Your Best Sip</h2>
                        <p className='w-50'>
                            Just fade away your monotony in a single sip.Great Coffee Beans contain huge amount of cafeine {"&"} helps to  Dip dive into the ultimate freshness
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
            <section className='container my-4 mx-auto pt-5 d-flex row justify-content-center mt-5'>
                <h2>Customer's Review ({users.slice(0, 3).length})</h2>
                {
                    users.slice(0, 3).map(user => <User key={user.id} user={user} ></User>)
                }
                <button onClick={showAllReviews} className='allReviewsBtn'>See All Reviews</button >
            </section>
        </div>


    );
};

export default Home;