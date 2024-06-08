import React from "react";
import following from "../Data/following.json"
import liked_posts from "../Data/liked_posts.json"
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LikedPosts = () => {
    const [monthlyData, setMonthlyData] = useState([]);

    useEffect(() => {
        const processData = () => {
            const followingAccounts = new Set(following.relationships_following.flatMap(item => 
                item.string_list_data.map(account => account.value)
            ));

            const counts = {};
            const now = new Date();
            const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth() + 1);

            liked_posts.likes_media_likes.forEach(likedPost => {
                likedPost.string_list_data.forEach(likeData => {
                    const date = new Date(likeData.timestamp * 1000);
                    if (date > oneYearAgo) {
                        const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
                        if (!counts[monthYear]) {
                            counts[monthYear] = { followed: 0, notFollowed: 0 };
                        }
                        if (followingAccounts.has(likedPost.title)) {
                            counts[monthYear].followed++;
                        } else {
                            counts[monthYear].notFollowed++;
                        }
                    }
                });
            });

            const sortedCounts = Object.keys(counts)
                .sort((a, b) => {
                    const [monthA, yearA] = a.split('-').map(Number);
                    const [monthB, yearB] = b.split('-').map(Number);
                    return new Date(yearA, monthA - 1) - new Date(yearB, monthB - 1);
                })
                .map(key => ({ monthYear: key, ...counts[key] }));

            setMonthlyData(sortedCounts);
        };

        processData();
    }, []);

    const chartData = {
        labels: monthlyData.map(item => item.monthYear),
        datasets: [
            {
                label: 'Liked Posts from Followed Accounts',
                data: monthlyData.map(item => item.followed),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Liked Posts from Non-Followed Accounts',
                data: monthlyData.map(item => item.notFollowed),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ]
    };



    return(
        <div>
            <h1>Instagram Posts Liked</h1>
            <Bar data={chartData}/>
        </div>
    );
};

export default LikedPosts;

// const barStyle = {
//     height: '100px',
//   };