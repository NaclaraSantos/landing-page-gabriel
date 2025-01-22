
import { Briefcase, Scale, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scale className="w-12 h-12 mb-4 text-gray-800" />,
      title: 'Direito Civel',
      description: 'Assessoria jurídica em questões contratuais, responsabilidade civil, direito do consumidor e família.',
      items: [
        'Contratos',
        'Responsabilidade Civil',
        'Direito do Consumidor',
        'Direito de Família'
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 mb-4 text-gray-800" />,
      title: 'Direito Trabalhista',
      description: 'Representação em causas trabalhistas, tanto para empregados quanto para empregadores.',
      items: [
        'Reclamações Trabalhistas',
        'Acordos e Negociações',
        'Direitos do Trabalhador',
        'Consultoria Empresarial'
      ]
    },
    {
      icon: <FileText className="w-12 h-12 mb-4 text-gray-800" />,
      title: 'Consultoria Jurídica',
      description: 'Orientação preventiva e estratégica para pessoas físicas e jurídicas.',
      items: [
        'Análise de Contratos',
        'Pareceres Jurídicos',
        'Consultoria Preventiva',
        'Planejamento Jurídico'
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair text-center mb-16">Nossos Serviços</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Atendimento presencial em Nova Lima e online para clientes em todo o mundo
          </p>
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;