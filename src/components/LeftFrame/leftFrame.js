import React from 'react';
import './leftFrame.css';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function LeftFrame() {
  return (
    <div className='leftFrameBox'>
      <div className='leftFrameContainer'>
        <div className='leftFrameMenu'>
          <div className='leftFrameMenuList'>
            <li className='leftFrameMenuItem'>
              <MarkUnreadChatAltIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Messages</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <GroupIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Groups</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <RssFeedIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Feed</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <FlagIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Pages</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <CalendarMonthIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Events</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <BuildIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Setting</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <SportsEsportsIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Games</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <NewspaperIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >News</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <WorkOutlineIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Jobs</span>
              
            </li>
            <li className='leftFrameMenuItem'>
              <AddShoppingCartIcon className='leftFrameMenueIcon'/>
              <span className='leftFrameMenueText' >Market</span>
              
            </li>
            <hr />
            <div className='pagesYouLiked'>
              <h3> Pages You Liked</h3>
            </div>
            <div className='PageList'>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            <li className='pagesLikedItem'>
              <img src="/img/download.jpg" alt='' className='pagePic' />
              <span className='pageName'> Sachiya</span>

            </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
