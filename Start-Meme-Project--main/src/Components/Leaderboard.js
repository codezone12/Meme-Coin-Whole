import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        fetchLeaderboardData();
    }, []);

    const fetchLeaderboardData = async () => {
        try {
            const response = await axios.get(`${window.location.origin}/leaderboard`);
            setLeaderboardData(response.data);
        } catch (error) {
            console.error('Error fetching leaderboard data:', error);
        }
    };

    return (
        <div id="LeaderBoard" className="bg-gray-200 max-w-screen-xl mx-auto px-4 py-8 border-2 border-y-gray-600">
            <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
            <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-[#1D212F] text-white uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Rank</th>
                            <th className="py-3 px-6 text-left">User</th>
                            <th className="py-3 px-6 text-left">Score</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {leaderboardData.map((user, index) => (
                            <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left font-bold whitespace-nowrap">{index + 1}</td>
                                <td className="py-3 px-6 text-left font-semibold">{user.loggedInUserName ? user.loggedInUserName : "Dummy name"}</td>
                                <td className="py-3 px-6 text-left font-semibold">{user.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
