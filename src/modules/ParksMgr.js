const remoteURL = "http://localhost:5002"

export default {
    //fetch one park by id
    getOne(id) {
      return fetch(`${remoteURL}/parks/${id}`).then(result => result.json());
    },

    //fetch all parks
    getAll() {
      return fetch(
        `${remoteURL}/parks?userId=${localStorage.getItem("userId")}`
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
