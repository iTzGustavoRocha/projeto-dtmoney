import { Transaction, TransactionStats, CategoryStats } from "./types";

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("pt-BR").format(date);
};

export const calculateStats = (transactions: Transaction[]): TransactionStats => {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
    transactionCount: transactions.length,
  };
};

export const getCategoryStats = (transactions: Transaction[]): CategoryStats[] => {
  const categoryMap = new Map<string, { total: number; count: number; type: 'income' | 'expense' }>();

  transactions.forEach(transaction => {
    const key = `${transaction.category}-${transaction.type}`;
    const existing = categoryMap.get(key) || { total: 0, count: 0, type: transaction.type };
    
    categoryMap.set(key, {
      total: existing.total + transaction.amount,
      count: existing.count + 1,
      type: transaction.type,
    });
  });

  return Array.from(categoryMap.entries()).map(([key, stats]) => ({
    category: key.split('-')[0],
    ...stats,
  }));
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};