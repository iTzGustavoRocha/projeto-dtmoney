import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

// 🔥 Importações do padrão Shadcn UI e React Hook Form
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Schema de validação simples para o Login
const loginSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function Login() {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Inicializando o formulário com o padrão que você usa no TransactionForm
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(data: LoginFormData) {
    setIsLoading(true);
    try {
      await signIn(data.email, data.password);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    // Container centralizado na tela com visual moderno (card sutil)
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6 p-8 rounded-xl border bg-card text-card-foreground shadow-sm">
        {/* Header do formulário de Login */}
        <div className="flex flex-col space-y-2 text-center items-center">
          <div className="p-3 bg-primary/10 text-primary rounded-full w-fit mb-2">
            <Lock className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-2">
            <img src="IgniteSymbol.svg" alt="" />
            <h1 className="text-2xl font-semibold tracking-tight">dtmoney</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Entre com suas credenciais para acessar sua conta
          </p>
        </div>

        {/* Formulário seguindo estritamente seu padrão Shadcn */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
            {/* Campo de Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu-email@exemplo.com"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo de Senha */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Botão de Submit com estado de carregamento */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Autenticando...
                </>
              ) : (
                "Entrar na conta"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
