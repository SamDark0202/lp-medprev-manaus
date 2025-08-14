import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";

const OfferSection = () => {
  const whatsappUrl = "https://oihe.in/l/heaW";
  
  // Calcular data dinâmica (30 dias a partir de hoje)
  const getOfferEndDate = () => {
    const today = new Date();
    const endDate = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
    return endDate.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Banner */}
          <div className="relative gradient-cta rounded-3xl p-8 md:p-12 text-center text-white shadow-strong overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Gift className="w-12 h-12 mr-4" />
                <div className="bg-yellow-400 text-brand-blue px-4 py-2 rounded-full">
                  <span className="font-bold text-lg">OFERTA ESPECIAL</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Empresas que aderirem este mês recebem{" "}
                <span className="text-yellow-300">+10% de crédito</span>{" "}
                no primeiro aporte
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Comece com mais benefícios para seus colaboradores
              </p>
              
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-green mb-6 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Quero meu benefício agora
              </Button>
              
              <div className="flex items-center justify-center text-blue-100">
                <Clock className="w-5 h-5 mr-2" />
                <p className="text-sm">
                  Bônus válido para novos contratos ativados até {getOfferEndDate()}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">0</span>
              </div>
              <h3 className="font-bold text-gray-dark mb-2">Zero Mensalidade</h3>
              <p className="text-gray-medium text-sm">Sem custos fixos para sua empresa</p>
            </div>
            
            <div className="bg-gray-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">24h</span>
              </div>
              <h3 className="font-bold text-gray-dark mb-2">Ativação Rápida</h3>
              <p className="text-gray-medium text-sm">Benefício ativo em até 24 horas</p>
            </div>
            
            <div className="bg-gray-light rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">70%</span>
              </div>
              <h3 className="font-bold text-gray-dark mb-2">Até 70% Economia</h3>
              <p className="text-gray-medium text-sm">Redução real nos custos de saúde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;