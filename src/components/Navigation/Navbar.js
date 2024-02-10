import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import  "./Navbar.css"


export default function Navbar() {
  return (
    <div className='navBarBox'>
         <div className='navBarLeft'>
        <span className='logo'>facebook</span>
        </div>
        <div className='navBarCenter'>
        <div className='searchBarBox'>
             <SearchIcon className='SearchIcon' />
             <input className='searchInput' placeholder='Search For Your Friend' />

        </div>
        </div>
        <div className='navBarRight'>
         <div className ='navBarLinks'>
            <span className='navBarLink'>HomePage</span>
            <span className='navBarLink'>Profile</span>

         </div>
         <div className='navbarIcons'>
            <div className='navbarIcon'>
             <PersonIcon />
             <span className='iconTag'>3</span>
            </div>
            <div className='navbarIcon'>
            <MessageIcon />
            <span className='iconTag'>5</span>
            </div>
            <div className='navbarIcon'>
            <SettingsIcon />
            <span className='iconTag'>2</span>
            </div>
         </div>
         <div className='pic'>
         <img src="/img/download.jpg" alt='' className='profilePicimg'/>

         </div>
         
        </div>
    </div>
  )
}

