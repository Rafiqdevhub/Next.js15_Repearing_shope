"use client";

import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const SearchButton = () => {
  const status = useFormStatus();
  return (
    <Button type="submit" disabled={status.pending} className="w-20">
      {status.pending ? <LoaderCircle className="animate-spin" /> : "Search"}
    </Button>
  );
};

export default SearchButton;
