import React from "react";
import following from "../Data/following.json"
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const FollowingRate = () => {
    const [monthlyData, setMonthlyData] = useState([]);

    useEffect(() => {
        const processData = () => {
        const accounts = following.relationships_following.flatMap(item => 
            item.string_list_data.map(account => account.timestamp));

        const counts = {};
        const now = new Date();
        const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth() + 1);

        accounts.forEach(timestamp => {
            const date = new Date(timestamp * 1000);
            if (date > oneYearAgo) {
            const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
            if (!counts[monthYear]) {
                counts[monthYear] = 0;
            }
            counts[monthYear]++;
            }
        });

        const sortedCounts = Object.keys(counts)
            .sort((a, b) => {
            const [monthA, yearA] = a.split('-').map(Number);
            const [monthB, yearB] = b.split('-').map(Number);
            return new Date(yearA, monthA - 1) - new Date(yearB, monthB - 1);
            })
            .map(key => ({ monthYear: key, count: counts[key] }));

        setMonthlyData(sortedCounts);
        };

        processData();
    }, []);

    const chartData = {
        labels: monthlyData.map(item => item.monthYear),
        datasets: [
        {
            label: 'Follows per Month',
            data: monthlyData.map(item => item.count),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }
        ]
    };

    return (
        <div>
            <h1>Instagram Following Rate Over the Past Year</h1>
            <Bar data={chartData}/>
        </div>
    );
};

export default FollowingRate;