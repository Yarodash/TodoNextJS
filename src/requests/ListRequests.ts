import {List} from "@/declarations/data/List";

export async function requestGetLists() {
  try {
    const resp = await fetch(
      "http://127.0.0.1:8000/lists",
      {method: "GET", cache: "no-cache"}
    );

    if (!resp.ok) {
      return [];
    }

    return await resp.json() as List[];
  }
  catch (e) {
    return [];
  }
}
