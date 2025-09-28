export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: Date;
  createdAt: Date;
}

export interface TransactionStats {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  transactionCount: number;
}

export interface CategoryStats {
  category: string;
  total: number;
  count: number;
  type: 'income' | 'expense';
}

export const CATEGORIES = {
  income: [
    'Salário',
    'Freelance',
    'Investimentos',
    'Vendas',
    'Outros'
  ],
  expense: [
    'Alimentação',
    'Transporte',
    'Moradia',
    'Saúde',
    'Educação',
    'Entretenimento',
    'Compras',
    'Outros'
  ]
} as const;

export type IncomeCategory = typeof CATEGORIES.income[number];
export type ExpenseCategory = typeof CATEGORIES.expense[number];
export type Category = IncomeCategory | ExpenseCategory;