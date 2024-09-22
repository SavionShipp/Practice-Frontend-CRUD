export function PostIndex(props) {
  return (
    <div id="post-index">
      <h1>All Posts</h1>
      <div className="cards">
        {props.posts.map(post =>(
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt="random"/>
            <button onClick={() => props.onShow(post)}>Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}