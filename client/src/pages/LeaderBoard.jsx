import React, { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import './leaderboard.css';
import axios from 'axios';

const teams = [
  { rank: 1, name: 'Team Alpha', score: 95 },
  { rank: 2, name: 'Team Beta', score: 90 },
  { rank: 3, name: 'Team Gamma', score: 85 },
  { rank: 4, name: 'Team Delta', score: 80 },
  { rank: 5, name: 'Team Epsilon', score: 75 },
  { rank: 6, name: 'Team Zeta', score: 70 },
  { rank: 7, name: 'Team Eta', score: 65 },
  { rank: 8, name: 'Team Theta', score: 60 },
  { rank: 9, name: 'Team Iota', score: 55 },
  { rank: 10, name: 'Team Kappa', score: 50 },
];

const Leaderboard = () => {
  const [teams, setTeams] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/v1/leaderboard'
      );
      const data = response.data;

      if (data.success) {
        const teamsData = data.data.map((item, index) => ({
          rank: index + 1,
          name: item.team,
          score: item.score,
        }));

        setTeams(teamsData);
      } else {
        console.error('Failed to fetch leaderboard data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className='max-w-4xl min-h-[50vh] mx-auto p-6 bg-gray-50 shadow-xl rounded-lg'>
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>
        Leaderboard
      </h1>
      <Divider />
      <table className='min-w-full mt-6'>
        <thead>
          <tr className='bg-[#04091b] text-white'>
            <th className='py-2 text-left px-4'>Rank</th>
            <th className='py-2 text-left px-4'>Team Name</th>
            <th className='py-2 text-left px-4'>Score</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr
              key={team.rank}
              className='border-b hover:bg-blue-100 transition duration-200'
            >
              <td className='py-2 px-4 text-gray-700'>{team.rank}</td>
              <td className='py-2 px-4 text-gray-700'>{team.name}</td>
              <td className='py-2 px-4 text-gray-700'>{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-8 text-center'>
        <button className='px-6 py-2 bg-[#04091b] text-white rounded hover:bg-[#010618] transition duration-200'>
          Refresh Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
