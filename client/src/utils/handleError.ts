import { toast } from "sonner";

export const handleError = (error: unknown) => {
  //unknown error found
  console.log(error);
  //@ts=expect-error unknown
  console.log(error.data.message);
  toast("Error: " + error.data.message);
};
