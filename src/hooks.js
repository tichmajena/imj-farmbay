// import cookie from "cookie";

// import { v4 as uuid } from "@lukeed/uuid";

// let days = 86400000 * 30;

// /** @type {import('@sveltejs/kit').GetSession} */
// export function getSession(request) {
//   return JSON.parse(cookie.parse(request.headers.cookie || "").session || null);
// }

// export async function handle({ request, resolve }) {
//   /** @type {import('@sveltejs/kit').Handle} */
//   request.locals = await JSON.parse(
//     cookie.parse(request.headers.cookie || "").session || null
//   );

//   if (request.query.has("_method")) {
//     request.method = request.query.get("_method").toUpperCase();
//   }

//   if (request.locals) {
//     const response = await resolve(request);

//     let cookieStr = JSON.stringify(request.locals);

//     console.log("R-PATH", request.path);
//     //console.log("R-HEADERS", request.headers);
//     return {
//       ...response,
//       headers: {
//         ...response.headers,
//         "set-cookie": `session=${cookieStr}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${
//           new Date().getTime() + days
//         };`,
//       },
//     };
//   }
//   return resolve(request);
// }
