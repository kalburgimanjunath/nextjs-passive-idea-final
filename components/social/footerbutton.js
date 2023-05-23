import { useState, useEffect } from 'react';
export default function Footerbutton() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);
  return (
    <div className="footerbutton">
      <div className="left">
        <span onClick={() => setLikes(likes + 1)}>
          <i class="bi bi-star"></i> {likes}
        </span>
        <span onClick={() => setComments(comments + 1)}>
          <i class="bi bi-chat"></i> {comments}
        </span>
      </div>
      <div className="right">
        <span onClick={() => setBookmarks(bookmarks + 1)}>
          <i class="bi bi-bookmark"></i> {bookmarks}
        </span>
        <span>
          <i class="bi bi-play-circle"></i>
        </span>
        <span>
          <i class="bi bi-share"></i>
        </span>
        <span>
          <i class="bi bi-three-dots-vertical"></i>
        </span>
      </div>
    </div>
  );
}
