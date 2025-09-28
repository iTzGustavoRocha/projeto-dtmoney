import { z } from "zod";
import { CATEGORIES } from "./types";

export const transactionSchema = z.object({
  description: z
    .string()
    .min(1, "Descrição é obrigatória")
    .max(100, "Descrição deve ter no máximo 100 caracteres")
    .trim(),
  amount: z
    .number({ message: "Valor é obrigatório" })
    .positive("Valor deve ser positivo")
    .max(999999999, "Valor muito alto"),
  type: z.enum(["income", "expense"], {
    message: "Tipo é obrigatório",
  }),
  category: z.string().min(1, "Categoria é obrigatória"),
  date: z.date({
    message: "Data é obrigatória",
  }),
});

export const createTransactionSchema = transactionSchema.refine(
  (data) => {
    if (data.type === "income") {
      return CATEGORIES.income.includes(data.category as any);
    } else {
      return CATEGORIES.expense.includes(data.category as any);
    }
  },
  {
    message: "Categoria inválida para o tipo selecionado",
    path: ["category"],
  }
);

export type TransactionFormData = z.infer<typeof transactionSchema>;