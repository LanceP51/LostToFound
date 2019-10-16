const remoteURL = "http://localhost:5002";

export default {
  //fetch one item by id
  getOne(id) {
    return fetch(`${remoteURL}/items/${id}`).then(result => result.json());
  },

  //fetch all items
  getAll() {
    return fetch(
      `${remoteURL}/items?userId=${localStorage.getItem("userId")}`
    ).then(result => result.json());
  },

  //fetch claimed items
  getClaimed() {
    return fetch(
      `${remoteURL}/items?userId=${localStorage.getItem("userId")}&statusId=3`
    ).then(result => result.json());
  },

  //fetch donated items
  getDonated() {
    return fetch(
      `${remoteURL}/items?userId=${localStorage.getItem("userId")}&statusId=5`
    ).then(result => result.json());
  },

  //fetch still lost items
  getStillLost() {
    return fetch(
      `${remoteURL}/items?userId=${localStorage.getItem("userId")}&statusId=1`
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
  }
};
