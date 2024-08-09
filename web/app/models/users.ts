export type User = {
  id: string;
  role: "admin" | "contributor" | "approver" | "reviewer" | "staff";
  projectRoles: Record<string, string>; // Mapping of projectId to role
};

export const createUser = (
  id: string,
  role: "admin" | "contributor" | "approver" | "reviewer" | "staff"
): User => {
  return {
    id,
    role,
    projectRoles: {},
  };
};

export const updateUserRole = (
  user: User,
  projectId: string,
  newRole: string
) => {
  user.projectRoles[projectId] = newRole;
};
