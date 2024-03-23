import { toast } from "sonner";

export const handleError = (error: unknown) => {
  console.log(error);
  //@ts=expect-error unknown
  console.log(error.data.message);
  toast("Error: " + error.data.message);
};
