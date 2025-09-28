import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FilterX } from "lucide-react";
import { CATEGORIES } from "@/lib/types";

export interface TransactionFilters {
  search: string;
  type: "all" | "income" | "expense";
  category: string;
}

interface TransactionFiltersProps {
  filters: TransactionFilters;
  onFiltersChange: (filters: TransactionFilters) => void;
}

export const TransactionFiltersComponent = ({
  filters,
  onFiltersChange,
}: TransactionFiltersProps) => {
  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  const handleTypeChange = (type: "all" | "income" | "expense") => {
    onFiltersChange({ 
      ...filters, 
      type, 
      category: type === "all" ? "all" : filters.category 
    });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({ ...filters, category });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      type: "all",
      category: "all",
    });
  };

  const availableCategories = filters.type === "income" 
    ? CATEGORIES.income 
    : filters.type === "expense" 
    ? CATEGORIES.expense 
    : [...CATEGORIES.income, ...CATEGORIES.expense];

  const hasActiveFilters = filters.search || filters.type !== "all" || (filters.category && filters.category !== "all");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Filtros
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="text-xs"
            >
              <FilterX className="h-3 w-3 mr-1" />
              Limpar
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar transações..."
              value={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>

          <Select value={filters.type} onValueChange={handleTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              <SelectItem value="income">Entradas</SelectItem>
              <SelectItem value="expense">Saídas</SelectItem>
            </SelectContent>
          </Select>

          <Select 
            value={filters.category} 
            onValueChange={handleCategoryChange}
            disabled={filters.type === "all"}
          >
            <SelectTrigger>
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              {availableCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};