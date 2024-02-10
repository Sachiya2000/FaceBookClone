import React from 'react';
import './addpost.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function Addpost() {
  return (
    <div className='addPost'>
      <div className='addPostContainer'>
        <div className='addPostTop'>
          <img src="/img/download.jpg" alt='' className='addpostPic'/>
          <input type='text' placeholder='What is on your mind?' className='addPostInput' />
        </div>
        <hr className='postHr' />
        <div className='addPostBottom'>
            <div className='addPostOptions'>
              <div className='addPostOption'>
                <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                <span className='AddPhotoOptionText'>Add Photo/Vedio</span>
              </div>
              <div className='addPostOption'>
                <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                <span className='AddPhotoOptionText'>Add Location</span>
           </div>
           <div className='addPostOption'>
                <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                <span className='AddPhotoOptionText'>Add Tag</span>
           </div>
           <div className='addPostOption'>
                <LiveTvIcon htmlColor='tomato'  className='addPhoto'/>
                <span className='AddPhotoOptionText'>Go Live</span>
           </div>
            </div>
            <button className='postButton'>Post</button>
        </div>
      </div>
    </div>
  );
}
