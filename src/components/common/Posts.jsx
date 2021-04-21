import Container from "./Container";
import Post from "./Post";
import posts from "../../posts/posts";

function Posts() {
  const allPosts = posts.map((post) => (
    <Post
      key={post.id}
      authorName={post.authorName}
      authorPhoto={post.authorPhoto}
      imgCover={post.imgCover}
      title={post.title}
      text={post.text}
      info={post.info}
    ></Post>
  ));

  return (
    <Container className="posts">
      {allPosts}
      <div className="posts__end">
        <button className="btn btn-red btn-medium">More posts</button>
      </div>
    </Container>
  );
}

export default Posts;
