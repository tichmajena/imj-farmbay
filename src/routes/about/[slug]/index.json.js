import { getJSON } from "../_api";
import { api } from ".../api/_rest";

export const get = async (request) => {
  console.log("", request.params.slug);
  //const response = await getJSON(request, `tutor/v1/quiz-question-answer/11/`);
  const response = await getJSON(
    request,
    `wp/v2/posts/?slug=${request.params.slug}`
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
  console.log("request.body");

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

export const put = async (request) => {
  console.log("PUTING");
  const response = await api(
    request,
    `wp/v2/posts/?slug=${request.params.slug}`,
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

export const del = async (request) => {
  console.log("DELETING");
  console.log(request);

  const response = await api(
    request,
    `wp/v2/posts/?slug=${request.params.slug}`
  );
  if (response.status < 400) {
    console.log("404 pano");

    return { body: [] };
  }
  return {
    body: response,
  };
};
