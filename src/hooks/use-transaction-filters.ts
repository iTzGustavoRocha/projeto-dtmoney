import { useMemo, useState } from "react";
import { Transaction } from "@/lib/types";
import { TransactionFilters } from "@/components/filters/transaction-filters";

export const useTransactionFilters = (transactions: Transaction[]) => {
  const [filters, setFilters] = useState<TransactionFilters>({
    search: "",
    type: "all",
    category: "all",
  });

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        if (
          !transaction.description.toLowerCase().includes(searchLower) &&
          !transaction.category.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      // Type filter
      if (filters.type !== "all" && transaction.type !== filters.type) {
        return false;
      }

      // Category filter
      if (filters.category && filters.category !== "all" && transaction.category !== filters.category) {
        return false;
      }

      return true;
    });
  }, [transactions, filters]);

  return {
    filters,
    setFilters,
    filteredTransactions,
  };
};