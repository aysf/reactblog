import { useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "let's party", author: "mario", body: "lorem ipsum...", id: 1},
    { title: "playing around", author: "luigi", body: "lorem ipsum...", id: 2},
    { title: "learn everyday", author: "mario", body: "lorem ipsum...", id: 3}
  ]);

  return (
    <div className='home'>
        {blogs.map(blog => (
            <div className='blog-preview'>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
        ))}
    </div>
  );

}

export default Home;