export interface Subtask {
  title: string,
  done: boolean,
}

export function createEmptySubtask() {
  return {
    title: "",
    done: false,
  } as Subtask;
}
