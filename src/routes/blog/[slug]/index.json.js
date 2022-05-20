import { getJSON } from "../_api";
import { api } from "./_rest";

export const get = async (event) => {
  //const response = await getJSON(request, `tutor/v1/quiz-question-answer/11/`);
  const response = await getJSON(
    event.request,
    `wp/v2/posts/?slug=${event.params.slug}&_embed=1`
  );

  if (response.status === 404) {
    console.log("404 panoo");
    // the user has visited before, but hasn't yet
    // created a todo list.
    // start with an empty array
    return { body: [] };
  }

  return response;
};

export const post = async (request) => {
  const response = await api(request, `wp/v2/posts`, request.body);
  if (response.status >= 400) {
    console.log("404 pano");

    return {
      status: 400,
      body: [],
    };
  }

  return {
    status: 200,
    body: response,
  };
};

export const put = async (event) => {
  const response = await api(
    event.request,
    `wp/v2/posts/?slug=${event.params.slug}`,
    request.body
  );
  if (response.status > 400) {
    console.log("404 pano");

    return { body: [] };
  }

  return {
    body: response,
  };
};

export const del = async (event) => {
  const response = await api(request, `wp/v2/posts/?slug=${event.params.slug}`);
  if (response.status < 400) {
    console.log("404 pano");

    return { body: [] };
  }
  return {
    body: response,
  };
};
