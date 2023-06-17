import {Task} from "@/declarations/data/Task";

export async function requestGetTasksByList(list_id: string) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/lists/${list_id}/tasks`,
      {method: "GET", cache: "no-cache"}
    );

    if (!resp.ok) {
      return [];
    }

    return await resp.json() as Task[];
  }
  catch (e) {
    return [];
  }
}

export async function requestGetTask(task_id: string) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tasks/${task_id}`,
      { method: "GET", cache: "no-cache" }
    );

    if (!resp.ok) {
      return undefined;
    }

    return await resp.json() as Task;
  }
  catch (e) {
    return undefined;
  }
}

export async function requestPostTask(task: Task) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tasks`,
      {
        method: "POST",
        cache: "no-cache",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      }
    );

    if (!resp.ok) {
      return undefined;
    }

    return await resp.json() as Task;
  }
  catch (e) {
    return undefined;
  }
}

export async function requestPutTask(task: Task) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tasks`,
      {
        method: "POST",
        cache: "no-cache",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      }
    );

    if (!resp.ok) {
      return undefined;
    }

    return await resp.json() as Task;
  }
  catch (e) {
    return undefined;
  }
}
