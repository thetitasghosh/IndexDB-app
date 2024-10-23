import { CirclePlus, Loader } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} variant={"secondary"}>
      {pending ? <Loader className="animate-spin" /> : <CirclePlus />} Add todo
    </Button>
  );
};

export default SubmitButton;
