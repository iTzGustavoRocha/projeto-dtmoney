import { useState } from "react";
import { Header } from "@/components/layout/header";
import { StatsCards } from "@/components/stats/stats-cards";
import { CategoryBreakdown } from "@/components/stats/category-breakdown";
import { TransactionTable } from "@/components/transactions/transaction-table";
import { TransactionModal } from "@/components/transactions/transaction-modal";
import { TransactionFiltersComponent } from "@/components/filters/transaction-filters";
import { useTransactions } from "@/hooks/use-transactions";
import { useTransactionFilters } from "@/hooks/use-transaction-filters";
import { Transaction } from "@/lib/types";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { 
    transactions, 
    stats, 
    isLoading, 
    addTransaction, 
    removeTransaction 
  } = useTransactions();

  const {
    filters,
    setFilters,
    filteredTransactions,
  } = useTransactionFilters(transactions);

  const handleAddTransaction = async (data: Omit<Transaction, "id" | "createdAt">) => {
    try {
      addTransaction(data);
      setIsModalOpen(false);
    } catch (error) {
      // Error handling is done in the hook
    }
  };

  const handleDeleteTransaction = (id: string) => {
    removeTransaction(id);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={openModal} />
      
      <main className="container mx-auto px-4 pb-8">
        <div className="space-y-8">
          <StatsCards stats={stats} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <TransactionFiltersComponent
                filters={filters}
                onFiltersChange={setFilters}
              />
              
              <TransactionTable 
                transactions={filteredTransactions}
                onDeleteTransaction={handleDeleteTransaction}
              />
            </div>
            
            <div className="space-y-8">
              <CategoryBreakdown transactions={transactions} />
            </div>
          </div>
        </div>
      </main>

      <TransactionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddTransaction}
        isLoading={false}
      />
    </div>
  );
};

export default Index;