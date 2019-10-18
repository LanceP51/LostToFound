const remoteURL = "http://localhost:5002"

export default {
    //fetch one Status by id
    getOne(id) {
      return fetch(`${remoteURL}/statuses/${id}`).then(result => result.json());
    },

    //fetch all statuses
    getAll() {
      return fetch(
        `${remoteURL}/statuses}`
      ).then(result => result.json());
    },

    // add a Status
    // post(newStatus) {
    //   return fetch(`${remoteURL}/statuses`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(newStatus)
    //   }).then(data => data.json());
    // },

    //edit an Status
    // update(editedStatus) {
    //   return fetch(`${remoteURL}/statuses/${editedStatus.id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(editedStatus)
    //   }).then(data => data.json());
    // }
  };
