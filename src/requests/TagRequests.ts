import {Tag} from "@/declarations/data/Tag";

export async function requestGetTags() {
  try {
    const resp = await fetch(
      "http://127.0.0.1:8000/tags",
      {method: "GET", cache: "no-cache"}
    );

    if (!resp.ok) {
      return [];
    }

    return await resp.json() as Tag[];
  }
  catch (e) {
    return [];
  }
}
