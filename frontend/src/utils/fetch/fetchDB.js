import { serverAddress, dbPath } from "../../constants";

export default function fetchDB(requestBody) {
  return fetch(serverAddress + dbPath, {
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
}