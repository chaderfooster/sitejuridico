import { Button, ButtonProps } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsappButton({ className, ...props }: ButtonProps) {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá, gostaria de saber mais sobre os serviços de advocacia."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      {...props}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Fale no WhatsApp
    </Button>
  );
}