
import '../style/App.css'
import {useState, useEffect} from 'react';






function App() {


  const [posts , setPost] = useState(null);
  const [loading , setLoading] =useState(true);
  const [error , setError] =useState();



useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => {return res.json()})
.then(data => {
  setPost(data)
  setLoading(false);
  setError('')

})
.catch(err => {
  setError(err.message)
setLoading(false)
}
)
})

  return (
    <div className="App">
      <h1>fetch by useEffect -- part 2 use loading</h1>

      {loading && <h2>Loading ...</h2> }
      {error && <h2>{error}</h2>}

{ /* instade of "posts == null ? '' " we can use && */}
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
