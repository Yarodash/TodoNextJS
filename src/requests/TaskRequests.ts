import {Task, TaskPut} from "@/declarations/data/Task";

export async function requestGetTasksByList(list_id: string) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/lists/${list_id}/tasks`,
      {method: "GET", cache: "no-store"}
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

export async function requestGetTasksByTag(tag_id: string) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tags/${tag_id}/tasks`,
      {method: "GET", cache: "no-store"}
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
      { method: "GET", cache: "no-store" }
    );

    if (!resp.ok) {
      return null;
    }

    return await resp.json() as Task;
  }
  catch (e) {
    return null;
  }
}

export async function requestPostTask(task: Task) {
  console.log(task);

  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tasks`,
      {
        method: "POST",
        cache: "no-store",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      }
    );

    if (!resp.ok) {
      return null;
    }

    return await resp.json() as Task;
  }
  catch (e) {
    return null;
  }
}

export async function requestPutTask(task: TaskPut) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tasks/${task.id}`,
      {
        method: "PUT",
        cache: "no-store",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      }
    );

    if (!resp.ok) {
      return null;
    }

    return await resp.json() as Task;
  }
  catch (e) {
    return null;
  }
}

export async function requestDeleteTask(task_id: string) {
  try {
    const resp = await fetch(
      `http://127.0.0.1:8000/tasks/${task_id}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    );

    if (!resp.ok) {
      return false;
    }

    return (await resp.json()).status as boolean;
  }
  catch (e) {
    return false;
  }
}
