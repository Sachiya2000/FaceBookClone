import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import LeftFrame from '../../components/LeftFrame/leftFrame';
import RightFrame from '../../components/RightFrame/rightFrame';
import PostFrame from '../../components/Post/postFrame';
import "./home.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bottomcontainer">
        <LeftFrame />
        <PostFrame />
        <RightFrame />
      </div>
    </>
  );
}
