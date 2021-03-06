const remoteURL = "https://lost-to-found-api.herokuapp.com";

export default {
    //fetch one Status by id
    getOne(id) {
      return fetch(`${remoteURL}/statuses/${id}`).then(result => result.json());
    },

    //fetch all statuses
    getAll() {
      return fetch(
        `${remoteURL}/statuses`
      ).then(result => result.json());
    }
  };
