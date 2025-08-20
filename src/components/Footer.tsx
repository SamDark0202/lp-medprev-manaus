import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "http://wa.me/5592982110001";

  return (
    <footer className="bg-gray-dark text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and CTA */}
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/1fa70004-1d8b-4fd3-83ae-cbe510b7aa46.png" 
              alt="Medprev Manaus"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Benefício de saúde empresarial sem mensalidade. 
              Pague apenas quando usar.
            </p>
            <Button 
              variant="cta"
              size="lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-300">Manaus - AM</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-300">(92) 98211-0001</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-300">contato@medprevmanaus.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6">Para Empresas</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 10 a 200 colaboradores</li>
              <li>• Todos os setores</li>
              <li>• Controle total de gastos</li>
              <li>• Relatórios mensais</li>
              <li>• Ativação imediata</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Medprev Manaus. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Benefício de saúde empresarial para Manaus e região metropolitana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;