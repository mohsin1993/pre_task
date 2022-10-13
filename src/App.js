import { useState, useEffect } from "react";
import Post from "./components/Post";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState(null);
  let postElms = 0;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  if (posts)
  {
    postElms = posts.map((post) => {
      return <Post key={post.id} {...post} />;
    });
  }

  return (
    <section>
      <div className="container">
        {posts ? (
          postElms
        ) : (
          "No posts found"
        )}
      </div>
    </section>
  );
}

export default App;
