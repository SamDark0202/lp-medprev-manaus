import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappUrl = "http://wa.me/5592982110001";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full shadow-strong hover:shadow-medium transition-bounce group"
        onClick={() => window.open(whatsappUrl, '_blank')}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-bounce" />
        <span className="hidden sm:inline">Fale conosco</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton;