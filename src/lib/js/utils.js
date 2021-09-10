export const BASE = import.meta.env.VITE_BASE;
const base = BASE;







const url = base + "/wp/v2/posts";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY21zLmZhcm1iYXkuY28uenciLCJpYXQiOjE2MzA2NjExMDQsIm5iZiI6MTYzMDY2MTEwNCwiZXhwIjoxNjMxMjY1OTA0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.8i9iORT9Ty1sCUoFY6Dw7tQEQYVzU-z1TT5GcwdNXrc";
const postId = 15;
//GET

export const getPosts = async () => {
  const res = await fetch(url);
  const data = await res.json();

  console.log(res);
  console.log(data);
};

const body = {
  title: "New Post",
  content: "My Content",
  status: "publish",
  author: 1,
};

const body2 = {
  title: "Edited Post",
  content: "My Content",
  status: "publish",
  author: 1,
};

export const createPosts = async () => {
  const res = await fetch(url, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
    method: "POST",
  });
  const data = await res.json();

  console.log(res);
  console.log(data);
};

export const editPost = async () => {
  const res = await fetch(`${url}/${postId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body2),
    method: "PUT",
  });
  const data = await res.json();

  console.log(res);
  console.log(data);
};

export const removePost = async () => {
  const res = await fetch(`${url}/${postId}`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: "",
    method: "DELETE",
  });
  const data = await res.json();

  console.log(res);
  console.log(data);
};
