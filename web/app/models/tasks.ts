export type Task = {
  id: string;
  title: string;
  description: string;
  group: number;
  assignedTo: string;
  status: "active" | "pending" | "completed";
};

export const createTask = (
  id: string,
  title: string,
  description: string,
  group: number,
  assignedTo: string
): Task => {
  return {
    id,
    title,
    description,
    group,
    assignedTo,
    status: "pending",
  };
};
