// Warpper function for rest api call
export const FetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

// Get Method functions
function get(url) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(url, requestOptions);
}

// POST Method functions
// function post(url, body) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   };
//   return fetch(url, requestOptions).then(handleResponse);
// }

// // PUT Method functions
// function put(url, body) {
//   const requestOptions = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   };
//   return fetch(url, requestOptions).then(handleResponse);
// }

// // Get Method functions
// // prefixed with underscored because delete is a reserved word in javascript
// function _delete(url) {
//   const requestOptions = {
//     method: "DELETE",
//   };
//   return fetch(url, requestOptions).then(handleResponse);
// }

// // helper functions
// function handleResponse(response) {
//   return response.text().then((text) => {
//     const data = text && JSON.parse(text);

//     if (!response.ok) {
//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }
