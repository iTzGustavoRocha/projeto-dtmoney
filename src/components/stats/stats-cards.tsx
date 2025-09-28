import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionStats } from "@/lib/types";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils-finance";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";

interface StatsCardsProps {
  stats: TransactionStats;
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  const { totalIncome, totalExpense, balance } = stats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8 relative z-10">
      <Card className="bg-card border shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Entradas
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">
            {formatCurrency(totalIncome)}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Saídas
          </CardTitle>
          <TrendingDown className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">
            {formatCurrency(totalExpense)}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Saldo
          </CardTitle>
          <DollarSign
            className={cn(
              "h-4 w-4",
              balance >= 0 ? "text-success" : "text-destructive"
            )}
          />
        </CardHeader>
        <CardContent>
          <div
            className={cn(
              "text-2xl font-bold",
              balance >= 0 ? "text-success" : "text-destructive"
            )}
          >
            {formatCurrency(balance)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
