const remoteURL = "https://lost-to-found-api.herokuapp.com";

export default {
  //fetch one category by id
  getOne(id) {
    return fetch(`${remoteURL}/categories/${id}`).then(result => result.json());
  },

  //fetch all categories
  getAll() {
    return fetch(
      `${remoteURL}/categories`
    ).then(result => result.json());
  },

  // add a category
  post(newCategory) {
    return fetch(`${remoteURL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCategory)
    }).then(data => data.json());
  }
};