import {Tag} from "@/declarations/data/Tag";

export async function requestGetTags() {
  try {
    const resp = await fetch(
      "http://127.0.0.1:8000/tags", {
        method: "GET",
        cache: "no-store"
      }
    );

    if (!resp.ok) {
      return [];
    }

    const result = await resp.json() as Tag[];
    return result;
  }
  catch (e) {
    return [];
  }
}

export async function requestPostTag(tag: Tag) {
  try {
    const resp = await fetch(
      "http://127.0.0.1:8000/tags", {
        method: "POST",
        cache: "no-store",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tag),
      }
    );

    if (!resp.ok) {
      return null;
    }

    return await resp.json() as Tag;
  }
  catch (e) {
    return null;
  }
}

export async function requestPutTag(tag: Tag) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tags/${tag.id}`, {
        method: "PUT",
        cache: "no-store",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tag),
      }
    );

    if (!resp.ok) {
      return null;
    }

    return await resp.json() as Tag;
  }
  catch (e) {
    return null;
  }
}
