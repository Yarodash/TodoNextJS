import {List} from "@/declarations/data/List";

export async function requestGetLists() {
  try {
    const resp = await fetch(
      "http://127.0.0.1:8000/lists", {
        method: "GET",
        cache: "no-store",
      }
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

export async function requestPostList(list: List) {
  try {
    const resp = await fetch(
      "http://127.0.0.1:8000/lists", {
        method: "POST",
        cache: "no-store",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(list),
      }
    );

    if (!resp.ok) {
      return null;
    }

    return await resp.json() as List;
  }
  catch (e) {
    return null;
  }
}

export async function requestPutList(list: List) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/lists/${list.id}`, {
        method: "PUT",
        cache: "no-store",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(list),
      }
    );

    if (!resp.ok) {
      return null;
    }

    return await resp.json() as List;
  }
  catch (e) {
    return null;
  }
}
