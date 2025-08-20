import { Button } from "@/components/ui/button";
import { UserMinus, TrendingUp, DollarSign, Heart } from "lucide-react";

const BenefitsSection = () => {
  const whatsappUrl = "http://wa.me/5592982110001";

  const benefits = [
    {
      icon: UserMinus,
      title: "Menos afastamentos e faltas",
      description: "Saúde preventiva reduz o absenteísmo e melhora o ambiente de trabalho"
    },
    {
      icon: TrendingUp,
      title: "+ Produtividade e engajamento",
      description: "Colaboradores mais saudáveis são mais produtivos e engajados"
    },
    {
      icon: DollarSign,
      title: "Custo sob demanda",
      description: "Sem surpresas - pague apenas pelo que for utilizado pelos colaboradores"
    },
    {
      icon: Heart,
      title: "Atratividade e retenção",
      description: "Benefício diferenciado para atrair e reter os melhores talentos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-dark mb-6">
            Benefícios para sua Empresa
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto mb-4">
            Vantagens reais que impactam diretamente nos resultados do seu negócio
          </p>
          <p className="text-sm text-brand-green font-semibold">
            Ideal para empresas de 10 a 200 colaboradores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-light rounded-2xl p-6 hover:bg-white hover:shadow-medium transition-smooth">
                <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green transition-smooth">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="cta"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Quero implementar na minha empresa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;