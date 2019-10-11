const remoteURL = "http://localhost:5002"

export default {
  //fetch one category by id
  getOne(id) {
    return fetch(`${remoteURL}/categories/${id}`).then(result => result.json());
  },

  //fetch all categories
  getAll() {
    return fetch(
      `${remoteURL}/categories}`
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
  },

  //edit an category
  update(editedCategory) {
    return fetch(`${remoteURL}/categories/${editedCategory.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedCategory)
    }).then(data => data.json());
  }
};
