import React from 'react'
import "./postFrame.css"
import Addpost from '../AddPost/addpost'
import Post from '../postPage/post'

export default function postFrame() {
  return (
    <div className='postFrameBox'>
        <Addpost />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}
