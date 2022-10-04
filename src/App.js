import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const title = "how to learn React in 30 days"
  const like = 30
  const tags = ["tutorial", "javascript", "blog"]
  const link = "https://google.com"
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    
      <h1>{ title }</h1>
      <p>likes: { like }</p>
      <p>tags: { tags }</p>
      <p>{ Math.random() * 10 }</p>
      <a href={link}>Google Link</a>
    </div>
  );
}

export default App;
