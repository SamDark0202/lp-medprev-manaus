import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://oihe.in/l/heaW";

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo */}
          <div className="absolute top-6 left-4 lg:left-8">
            <img 
              src="/lovable-uploads/Logo-Medprev-sem-bloco.png" 
              alt="Medprev Manaus - Benefício de Saúde Empresarial"
              className="h-12 w-auto"
            />
          </div>

          {/* Content */}
          <div className="text-white pt-20 lg:pt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Ofereça saúde de qualidade para seus colaboradores{" "}
              <span className="text-yellow-300">sem custo fixo mensal</span> — 
              pague apenas quando usar
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Benefício corporativo simples, sem mensalidade, com acesso a consultas, 
              exames e procedimentos com preços reduzidos em clínicas e laboratórios 
              parceiros de confiança em Manaus.
            </p>

            <div className="mb-8">
              <Button 
                size="lg" 
                variant="cta"
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 mb-6"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Quero saber mais no WhatsApp
              </Button>
            </div>

            {/* Benefits Bullets */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {[
                "Sem mensalidade",
                "Até 70% de economia", 
                "Ativação imediata"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                  <span className="text-blue-100 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative">
              <img 
                src={heroTeam}
                alt="Equipe de trabalho sorrindo - Sua empresa mais saudável, seu time mais produtivo"
                className="rounded-2xl shadow-strong w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-green/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold text-center bg-black/50 rounded-lg p-3">
                  "Sua empresa mais saudável, seu time mais produtivo"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
    </section>
  );
};

export default HeroSection;