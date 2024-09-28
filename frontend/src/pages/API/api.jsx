import { HEADER } from "./constant.jsx";
async function myApi(_link, _method, _data = null, _header = HEADER) {
  console.log(_data)
  try {
    if (_method === "GET") {
      const response = await fetch(_link);
      let data = await response.json();
      return data;
    } else {
      const response = await fetch(_link, {
        method: _method,
        headers: _header,
        body: JSON.stringify(_data),
      });
      if (!response.ok) {
        throw new Error("HTTP Error! Status: " + response.status);
      }
      let data = await response.json();
      return { data, status: response.status };
    }
  } catch (err) {
    console.log(err);
  }
}

export default myApi;
