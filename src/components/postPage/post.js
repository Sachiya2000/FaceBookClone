import React from 'react'
import "./post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddReactionIcon from '@mui/icons-material/AddReaction';
export default function Post() {
  return (
    <div className='Post'>
        <div className='postContainer' >
            <div className='postTop'>
                <img src="/img/BSCS0122011412_Arachchi.jpg" className='postImg' alt='' />
                <span className='postUserName'>Sachitha Madhuranga</span>
                <span className='postTime'>10 mins ago</span>

            </div>
            <div className='postCenter'>
                <div className ="postCaptionn" >
                    Hellow, I am Sachitha Madhuranga..! you Understand..? 
                </div>
                <img className='postedImage' src='/img/BSCS0122011412_Arachchi.jpg' alt='posted' />
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <ThumbUpIcon  htmlColor='blue'  className='reactIcon'/>
                    <FavoriteIcon  htmlColor='red' className='reactIcon'/>
                    <EmojiEmotionsIcon  htmlColor='orange' className='reactIcon'/>
                    <AddReactionIcon  htmlColor='yellow' className='reactIcon'/>
                    <span className='likeCount'>Sewmini and 2455 other</span>



                </div>
                <div className='postBottomRight' >
                    <span className='CommentCount'>124 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
