import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Tem mensalidade?",
      answer: "Não. O Medprev Manaus funciona com crédito pré-pago. Você só paga pelo que seus colaboradores utilizam, sem nenhum custo fixo mensal."
    },
    {
      question: "Há carência ou fidelidade?",
      answer: "Não. Seus colaboradores podem usar o benefício imediatamente após a ativação, e não há período de fidelidade. Você tem total flexibilidade."
    },
    {
      question: "Como controlo o uso?",
      answer: "Você recebe relatórios mensais detalhados com uso por colaborador e centro de custo, permitindo controle total dos gastos e planejamento financeiro."
    },
    {
      question: "Quanto economizo?",
      answer: "A economia pode chegar até 70%, dependendo do serviço utilizado e da rede parceira. Nossa média reportada pelos clientes é de 52% de economia."
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-medium">
              Esclarecemos as principais dúvidas sobre o benefício
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-medium p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-dark hover:text-brand-green transition-smooth">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-medium leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;