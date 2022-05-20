import { getJSON } from "./_api";

export const get = async (event) => {
  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }

  //const response = await getJSON(request, `tutor/v1/quiz-question-answer/11/`);

  try {
    const response = await getJSON(event.request, `wp/v2/gallery/21`);
    if (response.status === 404) {
      console.log("404 panoo");
      // the user has visited before, but hasn't yet
      // created a todo list.
      // start with an empty array
      return { body: [] };
    }

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
