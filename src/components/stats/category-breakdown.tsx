import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Transaction } from "@/lib/types";
import { formatCurrency, getCategoryStats } from "@/lib/utils-finance";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryBreakdownProps {
  transactions: Transaction[];
}

export const CategoryBreakdown = ({ transactions }: CategoryBreakdownProps) => {
  const categoryStats = getCategoryStats(transactions);
  
  if (categoryStats.length === 0) {
    return null;
  }

  const incomeStats = categoryStats.filter(stat => stat.type === "income");
  const expenseStats = categoryStats.filter(stat => stat.type === "expense");
  
  const totalIncome = incomeStats.reduce((sum, stat) => sum + stat.total, 0);
  const totalExpense = expenseStats.reduce((sum, stat) => sum + stat.total, 0);

  const renderCategoryList = (
    stats: typeof categoryStats, 
    title: string, 
    icon: React.ReactNode,
    total: number,
    colorClass: string
  ) => {
    if (stats.length === 0) return null;

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="font-semibold">{title}</h4>
          <Badge variant="secondary" className="ml-auto">
            {formatCurrency(total)}
          </Badge>
        </div>
        <div className="space-y-3">
          {stats
            .sort((a, b) => b.total - a.total)
            .map((stat) => {
              const percentage = (stat.total / total) * 100;
              return (
                <div key={stat.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{stat.category}</span>
                    <div className="flex items-center gap-2">
                      <span className={cn("font-mono", colorClass)}>
                        {formatCurrency(stat.total)}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {stat.count}
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={percentage} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {percentage.toFixed(1)}% do total
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Breakdown por Categoria</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {renderCategoryList(
          incomeStats,
          "Entradas",
          <TrendingUp className="h-4 w-4 text-success" />,
          totalIncome,
          "text-success"
        )}
        
        {incomeStats.length > 0 && expenseStats.length > 0 && (
          <div className="border-t pt-6" />
        )}
        
        {renderCategoryList(
          expenseStats,
          "Saídas",
          <TrendingDown className="h-4 w-4 text-destructive" />,
          totalExpense,
          "text-destructive"
        )}
      </CardContent>
    </Card>
  );
};