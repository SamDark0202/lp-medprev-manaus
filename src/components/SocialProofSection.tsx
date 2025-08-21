import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const SocialProofSection = () => {
  const whatsappUrl = "http://wa.me/5592982110001";

  const testimonials = [
    {
      name: "Roberto Silva",
      company: "Franquia Alimentação - Florianópolis",
      text: "Implementamos o Medprev e nossa equipe adorou! Reduziu custos e aumentou a satisfação dos colaboradores.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Indústria Local - Manaus",
      text: "Sem mensalidade foi o diferencial. Pagamos apenas quando nossos funcionários usam. Perfeito para nosso orçamento.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      company: "Empresa de Logística - Manaus",
      text: "O controle é total! Relatórios claros e economia real. Recomendo para qualquer empresário de Manaus.",
      rating: 5
    }
  ];

  const partners = [
    "Laboratório CPDE",
    "Clínica CMS",
    "Laboratório RB",
    "Mentalcor"
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-dark mb-6">
            Empresas que Confiam
          </h2>
          <div className="bg-brand-green text-white inline-block px-6 py-3 rounded-full mb-8">
            <p className="text-lg font-bold">Economia média reportada: 52%</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-strong transition-smooth">
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 text-brand-green mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-medium mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-gray-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-gray-dark mb-6">
            Parceiros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-soft">
                <p className="text-gray-dark font-medium text-sm">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Fale com um especialista agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;