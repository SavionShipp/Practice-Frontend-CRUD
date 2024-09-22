export function PostShow(props) {
  return(
    <div>
      <p>title:{props.post.title}</p>
      <p>body:{props.post.body}</p>
      <p>image url:{props.post.image}</p>
    </div>
  );
}