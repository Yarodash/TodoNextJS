import {Subtask} from "@/declarations/data/Subtask";

export interface Task {
  id: string,
  title: string,
  description: string,
  done: boolean,
  subtasks: Subtask[],
  list_id: string,
  tag_ids: string[],
}

export interface TaskPut {
  id: string,
  title?: string,
  description?: string,
  done?: boolean,
  subtasks?: Subtask[],
  list_id?: string,
  tag_ids?: string[],
}

export function createEmptyTask() {
  return {
    id: "",
    title: "",
    description: "",
    done: false,
    subtasks: [],
    list_id: "",
    tag_ids: [],
  } as Task;
}
