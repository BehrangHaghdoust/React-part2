
import '../style/App.css'
import {useState, useEffect} from 'react';






function App() {


  const [posts , setPost] = useState(null);


useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => {return res.json()})
.then(data => setPost(data))
})

  return (
    <div className="App">
      <h1>fetch by useEffect</h1>

// instade of "posts == null ? '' " we can use &&
{posts == null ? '' : posts.map(post => (
<div key={post.id}>
  <h3>{post.title}</h3>
  <h5>{post.body}</h5>
  <hr/>
</div>
))}

    </div>
  );
}

export default App;
