import axios from "axios";

import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//     return function (dipatch) {
//         axios.get('/api/auth/current_user').then((res) => {
//             dipatch({ type: FETCH_USER, payload: res.data })
//         })
//     }
// }
export const fetchUser = () => async (dipatch) => {
  const response = await axios.get("/api/auth/current_user");
  if (response) dipatch({ type: FETCH_USER, payload: response.data });
};
