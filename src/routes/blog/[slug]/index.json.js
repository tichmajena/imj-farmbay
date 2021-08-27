import { getJSON } from "../_api";

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
