const axios = require('axios');

const num_requests = 101

async function makeRequestTooBusy() {
  const requests = []

  for (let index = 0; index < num_requests; index++) {
    requests.push(axios.get('http://localhost:8081/proprietario/'))
  }

  await Promise.all(requests)
  console.log("All requests completed.")
}
makeRequestTooBusy()