const API = require("call-of-duty-api")({ platform: "uno" });

async function codTest(name: string) {
  const activisionID = "GulagLotion#5611289";
  API.MWwz(activisionID)
    .then((data) => {
      console.log(data); // see output
      // need to use await async
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default codTest;

// use this API to show player stats, compare different players
