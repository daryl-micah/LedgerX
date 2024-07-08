import { client } from "@/lib/hono";
import { convertAmountFrom } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useTransaction = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["transaction", { id }],
    queryFn: async () => {
      const response = await client.api.transactions[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch transaction");
      }

      const { data } = await response.json();
      return {
        ...data,
        amount: convertAmountFrom(data.amount),
      };
    },
  });

  return query;
};
