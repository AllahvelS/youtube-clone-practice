import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    setLoading(false);
  }, [videoId]);

  const handleAddComment = () => {
    setComments([...comments, { text: newComment, name: username }]);
    setNewComment('');
    setUsername('');
  }

  const handleDeleteComment = (index) => {
    setComments(comments.filter((comment, i) => i !== index));
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <YouTube videoId={videoId} />
      <input 
        placeholder="Your Name"
        value={username} 
        onChange={e => setUsername(e.target.value)} 
      />
      <input 
        placeholder="Your Comment"
        value={newComment} 
        onChange={e => setNewComment(e.target.value)} 
      />
      <button onClick={handleAddComment}>Add Comment</button>
      {comments.map((comment, i) => (
        <div key={i}>
          <p>{comment.name}: {comment.text}</p>
          <button onClick={() => handleDeleteComment(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};


export default VideoPlayer;

