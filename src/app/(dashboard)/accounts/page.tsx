"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

import { Payment, columns } from "./columns";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

const AccountsPage = () => {
  const newAccount = useNewAccount();

  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "a@example.com",
    },
    {
      id: "465ed52f",
      amount: 300,
      status: "success",
      email: "p@example.com",
    },
    {
      id: "212e1d42",
      amount: 150,
      status: "processing",
      email: "d@example.com",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button onClick={newAccount.onOpen} size={"sm"}>
            <Plus className="size-4 mr-2" />
            Add New
          </Button>
        </CardHeader>
        <DataTable
          filterKey="email"
          columns={columns}
          data={data}
          onDelete={() => {}}
        />
      </Card>
    </div>
  );
};
export default AccountsPage;
