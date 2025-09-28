import { useState, useEffect, useCallback } from "react";
import { Transaction, TransactionStats } from "@/lib/types";
import { storageService } from "@/lib/storage";
import { calculateStats, generateId } from "@/lib/utils-finance";
import { toast } from "@/hooks/use-toast";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<TransactionStats>({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    transactionCount: 0,
  });

  // Load transactions from storage on mount
  useEffect(() => {
    try {
      const savedTransactions = storageService.getTransactions();
      setTransactions(savedTransactions);
      setStats(calculateStats(savedTransactions));
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao carregar transações",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Update stats when transactions change
  useEffect(() => {
    setStats(calculateStats(transactions));
  }, [transactions]);

  const addTransaction = useCallback((data: Omit<Transaction, "id" | "createdAt">) => {
    try {
      const newTransaction: Transaction = {
        ...data,
        id: generateId(),
        createdAt: new Date(),
      };

      const updatedTransactions = storageService.addTransaction(newTransaction);
      setTransactions(updatedTransactions);
      
      toast({
        title: "Sucesso",
        description: "Transação adicionada com sucesso",
        variant: "default",
      });
      
      return newTransaction;
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao adicionar transação",
        variant: "destructive",
      });
      throw error;
    }
  }, []);

  const removeTransaction = useCallback((id: string) => {
    try {
      const updatedTransactions = storageService.removeTransaction(id);
      setTransactions(updatedTransactions);
      
      toast({
        title: "Sucesso",
        description: "Transação removida com sucesso",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao remover transação",
        variant: "destructive",
      });
    }
  }, []);

  const updateTransaction = useCallback((id: string, updates: Partial<Transaction>) => {
    try {
      const updatedTransactions = storageService.updateTransaction(id, updates);
      setTransactions(updatedTransactions);
      
      toast({
        title: "Sucesso",
        description: "Transação atualizada com sucesso",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar transação",
        variant: "destructive",
      });
    }
  }, []);

  const clearAllTransactions = useCallback(() => {
    try {
      storageService.saveTransactions([]);
      setTransactions([]);
      
      toast({
        title: "Sucesso",
        description: "Todas as transações foram removidas",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao limpar transações",
        variant: "destructive",
      });
    }
  }, []);

  return {
    transactions,
    stats,
    isLoading,
    addTransaction,
    removeTransaction,
    updateTransaction,
    clearAllTransactions,
  };
};