import React from 'react';
import { Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import '../Dashboard/Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 90000,
            "revenue": 10400
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 178300,
            "revenue": 124500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 422600,
            "revenue": 260100
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 222900,
            "revenue": 90405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 490100,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 567000,
            "revenue": 91000
        }
    ]
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div>
                <div className='chart mt-4'>
                    <LineChart width={400} height={450} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#1000d8" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Line type="monotone" dataKey="revenue" stroke="#8700d8" />

                        <Tooltip />
                    </LineChart>
                    <h4 className='pt-5'>Sell vs Revenue</h4>
                </div>
                <div className='chart mt-4'>

                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={80} fill="#8044d8" />
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={100} outerRadius={130} fill="#008080" label />
                        <Tooltip />
                    </PieChart>
                    <h4 className='pt-5'>Investment vs Revenue</h4>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;