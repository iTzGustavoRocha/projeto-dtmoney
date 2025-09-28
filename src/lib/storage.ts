import { Transaction } from "./types";

const STORAGE_KEY = "dtmoney_transactions";

export const storageService = {
  getTransactions(): Transaction[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      
      const transactions = JSON.parse(data);
      return transactions.map((t: any) => ({
        ...t,
        date: new Date(t.date),
        createdAt: new Date(t.createdAt),
      }));
    } catch (error) {
      console.error("Error loading transactions:", error);
      return [];
    }
  },

  saveTransactions(transactions: Transaction[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch (error) {
      console.error("Error saving transactions:", error);
    }
  },

  addTransaction(transaction: Transaction): Transaction[] {
    const transactions = this.getTransactions();
    const newTransactions = [...transactions, transaction];
    this.saveTransactions(newTransactions);
    return newTransactions;
  },

  removeTransaction(id: string): Transaction[] {
    const transactions = this.getTransactions();
    const newTransactions = transactions.filter(t => t.id !== id);
    this.saveTransactions(newTransactions);
    return newTransactions;
  },

  updateTransaction(id: string, updates: Partial<Transaction>): Transaction[] {
    const transactions = this.getTransactions();
    const newTransactions = transactions.map(t => 
      t.id === id ? { ...t, ...updates } : t
    );
    this.saveTransactions(newTransactions);
    return newTransactions;
  }
};