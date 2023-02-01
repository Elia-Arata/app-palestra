export const ADD_APP = "ADD_APP";
export const UPDATE_APP = "UPDATE_APP";
export const DELETE_APP = "DELETE_APP";

export function addApp(payload) {
  return { type: ADD_APP, payload };
}

export function updateApp(payload) {
  return { type: UPDATE_APP, payload };
}

export function deleteApp(payload) {
  return { type: DELETE_APP, payload };
}