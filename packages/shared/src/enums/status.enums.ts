export enum StatusEnum {
  In_Progress = "In_Progress",
  Completed = "Completed",
  Not_Started = "Not_Started",
}

export const StatusValues = Object.values(StatusEnum);
export type Status = (typeof StatusValues)[number];
