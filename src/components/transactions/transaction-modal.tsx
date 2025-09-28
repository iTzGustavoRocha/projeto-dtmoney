import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TransactionForm } from "@/components/forms/transaction-form";
import { Transaction } from "@/lib/types";

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Transaction, "id" | "createdAt">) => void;
  isLoading?: boolean;
}

export const TransactionModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  isLoading 
}: TransactionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nova Transação</DialogTitle>
          <DialogDescription>
            Adicione uma nova transação ao seu controle financeiro.
          </DialogDescription>
        </DialogHeader>
        <TransactionForm
          onSubmit={onSubmit}
          onCancel={onClose}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};