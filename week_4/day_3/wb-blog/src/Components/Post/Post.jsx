import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postData from '../../data/post_data.json';
import './Post.css';

export default function Post() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // console.log(useParams())
  const { id } = useParams()
  // console.log(typeof id)

  useEffect(() => {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filtering an array of dummy data
    const post = postData.find((post) => post.id === +id);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      setTitle('Post Not Found');
    }
  }, []);

  return (
    <div className="Post">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
