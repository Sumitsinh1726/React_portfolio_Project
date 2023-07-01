import React from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './component/Sidebar';

const Dashboard = (props) => {

  // const location = useLocation();

  //  console.log(location.pathname)
  // const pathname = location.pathname.slice(7); 
  // console.log(pathname)

  const location = useLocation();
  
  const pathname = location.pathname.slice(7);
  console.log(pathname);
  
  return (
    <>
      <Sidebar/>
      <div className="w-10/12 absolute right-0 top-0">
        <p className='capitalize text-2xl'>{pathname}</p>
        {/* Dashboard */}
      </div>
    </>
  )
}

export default Dashboard