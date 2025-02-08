import Link from 'next/link'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

export default function Sidebar() {
  return (
    <div className='flex flex-col justify-between h-full p-3 py-5'>
        <div className="user">
            
        </div>
        <div className="tabs flex flex-col gap-11">
            <Link href="/dashboard/firLodge" className='flex gap-10 items-center p-4 px-5 bg-[#161616] text-[#e0e0e0] rounded-lg text-md'><CreateIcon/>FIR Lodge</Link>
            <Link href="/dashboard/MyCases" className='flex gap-10 items-center p-4 px-5  text-[#e0e0e0] rounded-lg text-md'><ArticleRoundedIcon/>Cases under me</Link>
            <Link href="/dashboard/Alerts" className='flex gap-10 items-center p-4 px-5  text-[#e0e0e0] rounded-lg text-md'><NotificationsActiveRoundedIcon/>Alerts</Link>
            <Link href="/dashboard/Analytics" className='flex gap-10 items-center p-4 px-5  text-[#e0e0e0] rounded-lg text-md'><LeaderboardRoundedIcon/>Analytics</Link>
        </div>
        <div className="logout">
            <p className='text-[#e0e0e0] text-lg text-center'>Logout</p>
        </div>
    </div>
  )
}
