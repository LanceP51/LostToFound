const remoteURL = "https://lost-to-found-api.herokuapp.com";

export default {
  //fetch one park by id
  getOne(id) {
    return fetch(`${remoteURL}/parks/${id}`).then(result => result.json());
  },

  // get session storage id
  getOneBySession() {
    return fetch(
      `${remoteURL}/parks/${sessionStorage.getItem("credentials")}`
    ).then(result => result.json());
  },

  //fetch all parks
  getAll() {
    return fetch(
      `${remoteURL}/parks?parkId=${sessionStorage.getItem("credentials")}`
    ).then(result => result.json());
  },

  // add a new park
  post(newPark) {
    return fetch(`${remoteURL}/parks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPark)
    }).then(data => data.json());
  },

  //edit a park location
  update(editedPark) {
    return fetch(`${remoteURL}/parks/${editedPark.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPark)
    }).then(data => data.json());
  }
};
