import React, { useState } from 'react';
import './PostForm.css';
import Maps from './Maps';

const PostForm = () => {
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // create a new post object and add it to the array
    const newPost = { name: name, source: source, destination: destination };
    setPosts([...posts, newPost]);
    // clear the form fields
    setName('');
    setSource('');
    setDestination('');
  };

  const handlePostClick = (index) => {
    setSelectedPostIndex(selectedPostIndex === index ? -1 : index);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={(event) => {
              setSource(event.target.value);
              if (selectedPostIndex !== -1) {
                setPosts((prevState) => {
                  const newPosts = [...prevState];
                  newPosts[selectedPostIndex].source = event.target.value;
                  return newPosts;
                });
              }
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(event) => {
              setDestination(event.target.value);
              if (selectedPostIndex !== -1) {
                setPosts((prevState) => {
                  const newPosts = [...prevState];
                  newPosts[selectedPostIndex].destination = event.target.value;
                  return newPosts;
                });
              }
            }}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="post-list">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <button className="post-header" onClick={() => handlePostClick(index)}>
              <h3>{post.name}</h3>
              <p>{post.source} to {post.destination}</p>
            </button>
            <Maps post={post} show={index === selectedPostIndex} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostForm;
