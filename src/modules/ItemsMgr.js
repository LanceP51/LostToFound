const remoteURL = "http://localhost:5002";

export default {
  //fetch one item by id
  getOne(id) {
    return fetch(`${remoteURL}/items/${id}`).then(result => result.json());
  },

  // get session storage id
  getOne() {
    return fetch(`${remoteURL}/parks/${sessionStorage.getItem('credentials')}`).then(result => result.json())
     },

  //fetch all items
  getAll() {
    return fetch(
      `${remoteURL}/items?userId=${sessionStorage.getItem("userId")}&_expand=park&_expand=category&_expand=status`
    ).then(result => result.json());
  },

  //fetch claimed items
  getClaimed() {
    return fetch(
      `${remoteURL}/items?_expand=park&_expand=category&_expand=status&statusId=3`
    ).then(result => result.json());
  },

  //fetch donated items
  getDonated() {
    return fetch(
      `${remoteURL}/items?_expand=park&_expand=category&_expand=status&statusId=5`
    ).then(result => result.json());
  },

  //fetch still lost items
  getStillLost() {
    return fetch(
      `${remoteURL}/items?userId=${sessionStorage.getItem("userId")}&_expand=park&_expand=category&_expand=status&statusId=1`
    ).then(result => result.json());
  },

  // list a new item
  post(newItem) {
    return fetch(`${remoteURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }).then(data => data.json());
  },

  //edit an item
  edit(editedItem) {
    return fetch(`${remoteURL}/items/${editedItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedItem)
    }).then(data => data.json());
  },

  // delete item
  delete(id) {
    return fetch(`${remoteURL}/items/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
};
