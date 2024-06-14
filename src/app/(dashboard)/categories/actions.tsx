"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit2, MoreHorizontal } from "lucide-react";

import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type Props = {
  id: string;
};

export const Actions = ({ id }: Props) => {
  const { onOpen } = useOpenAccount();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger as child>
          <Button variant={"ghost"} className="size-8 p-0">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled={false} onClick={() => onOpen(id)}>
            <Edit2 className="size-4 mr-2" />
            Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
