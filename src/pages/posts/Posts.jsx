import axios from "axios";
import { useQuery } from "react-query";

const getPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

function Posts() {
  const { isLoading, data } = useQuery("get-posts", getPosts);

  console.log(isLoading, data);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}

export default Posts;
