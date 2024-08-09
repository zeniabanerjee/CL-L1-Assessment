export type Project = {
  id: string;
  name: string;
  members: {
    contributor: string;
    approver: string;
    reviewer: string;
    admin: string;
  };
};

export const createProject = (
  id: string,
  name: string,
  contributorId: string,
  approverId: string,
  reviewerId: string,
  adminId: string
): Project => {
  return {
    id,
    name,
    members: {
      contributor: contributorId,
      approver: approverId,
      reviewer: reviewerId,
      admin: adminId,
    },
  };
};
