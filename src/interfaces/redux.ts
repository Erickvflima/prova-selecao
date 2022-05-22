export interface reduxTemplate {
  status: "loading" | "idle" | "completed" | "failed";
  message: string;
  type: string;
}
