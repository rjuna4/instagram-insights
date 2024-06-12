import React from "react";
import following from "../Data/following.json"
import posts_viewed from "../Data/posts_viewed.json"
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const PostsViewed = () => {
    const [monthlyData, setMonthlyData] = useState([]);
    const [authorsData, setAuthorsData] = useState({});

    useEffect(() => {
        const processData = () => {
            const followingAccounts = new Set(following.relationships_following.flatMap(item => 
                item.string_list_data.map(account => account.value)
            ));

            // const authors = {};
            const counts = {};
            const now = new Date();
            const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), 1);

            posts_viewed.impressions_history_posts_seen.forEach(postViewed => {
                const author = postViewed.string_map_data.Author.value;
                const timestamp = postViewed.string_map_data.Time.timestamp;    
                const date = new Date(timestamp * 1000);
                    if (date > oneYearAgo) {
                        const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
                        if (!counts[monthYear]) {
                            counts[monthYear] = { followed: 0, notFollowed: 0 };
                            // authors[monthYear] = [];
                        }
                        if (followingAccounts.has(author)) {
                            counts[monthYear].followed++;
                        } else {
                            counts[monthYear].notFollowed++;
                        }
                        // authors[monthYear].push(author);
                    }
            });

            const sortedCounts = Object.keys(counts)
                .sort((a, b) => {
                    const [monthA, yearA] = a.split('-').map(Number);
                    const [monthB, yearB] = b.split('-').map(Number);
                    return new Date(yearA, monthA - 1) - new Date(yearB, monthB - 1);
                })
                .map(key => ({ monthYear: key, ...counts[key] }));

            setMonthlyData(sortedCounts);
            // setAuthorsData(authors);
        };

        processData();
    }, []);

    const chartData = {
        labels: monthlyData.map(item => item.monthYear),
        datasets: [
            {
                label: 'Viewed Posts from Followed Accounts',
                data: monthlyData.map(item => item.followed),
                backgroundColor: 'rgb(75, 192, 192, 0.6)',
                borderColor: 'rgb(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Viewed Posts from Non-Followed Accounts',
                data: monthlyData.map(item => item.notFollowed),
                backgroundColor: 'rgb(172, 156, 255, 0.6)',
                borderColor: 'rgb(172, 156, 255, 1)',
                borderWidth: 1,
            }
        ]
    };
    
    return (
        <div>
            <h1>Instagram Posts Viewed In May 2024</h1>
            <Bar data={chartData}/>
        </div>
    );
};

export default PostsViewed;

// const barStyle = {
//     margin: '100px',
//   };