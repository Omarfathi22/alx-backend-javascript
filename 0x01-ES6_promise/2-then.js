export default function handleResponseFromAPI(promise) {
    return promise
      .then((response) => {
        // Log on resolution
        console.log("Got a response from the API");
        // Return the object on resolution
        return {
          status: 200,
          body: 'success',
        };
      })
      .catch(() => {
        // Return an empty Error object on rejection
        return new Error();
      });
  }
  