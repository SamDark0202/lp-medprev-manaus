import { Button } from "@/components/ui/button";
import { CreditCard, Users, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const whatsappUrl = "http://wa.me/5592982110001";

  const steps = [
    {
      icon: CreditCard,
      title: "1. Defina o valor de crédito",
      description: "A empresa define o valor de crédito pré-pago e controlado para seus colaboradores"
    },
    {
      icon: Users,
      title: "2. Colaboradores utilizam a rede",
      description: "Colaboradores utilizam a rede Medprev Manaus para consultas, exames e procedimentos"
    },
    {
      icon: FileText,
      title: "3. Receba relatório mensal",
      description: "A empresa recebe relatório mensal de uso e saldo, com controle total dos gastos"
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-dark mb-6">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Três passos simples para implementar o benefício de saúde na sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-medium hover:shadow-strong transition-smooth">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Ver condições no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;