import axios from 'axios';

const getPosts = async () => {
  return await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data);
};

const getPost = async (id) => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data);
};

const postService = {
  getPosts,
  getPost,
};

export default postService;
