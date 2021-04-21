import Container from "./Container";
import Flex from "./Flex";

function CreatePost() {
  return (
    <Container className="create-post-container animate__animated animate__fadeIn">
      <form>
        <h1>Create a new post</h1>
        <input
          type="text"
          className="input-post input--white shadow"
          placeholder="NOT IMPLEMENTED YET"
        />
        <textarea
          className="textarea-post input input--white shadow"
          placeholder="NOT IMPLEMENTED YET"
        ></textarea>
        <Flex style={{ justifyContent: "space-evenly" }}>
          <button className="btn btn-red btn-medium opacity">
            Create new post
          </button>
          <button className="btn btn-outline-white btn-medium opacity">
            Upload image
          </button>
        </Flex>
      </form>
    </Container>
  );
}

export default CreatePost;
