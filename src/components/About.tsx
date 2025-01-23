
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair text-center mb-16">Sobre Gabriel Couto</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/gabriel-photo.jpg" alt="Gabriel Photo"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Formação e Experiência</h3>
            <p className="text-gray-700 mb-6">
              Graduado pela Universidade Milton Campos e pós-graduado em Direito Civel e Trabalhista,
              Dr. Gabriel possui uma sólida formação acadêmica e vasta experiência na área jurídica.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-gray-800 mt-1" />
                <div>
                  <h4 className="font-semibold">Formação Acadêmica</h4>
                  <p className="text-gray-600">Universidade Milton Campos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-gray-800 mt-1" />
                <div>
                  <h4 className="font-semibold">Pós-Graduação</h4>
                  <p className="text-gray-600">Direito Civel e Trabalhista</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-gray-800 mt-1" />
                <div>
                  <h4 className="font-semibold">Atendimento</h4>
                  <p className="text-gray-600">Atendimento presencial em Nova Lima e online para todo o mundo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-center">Missão e Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Excelência</h4>
              <p className="text-gray-600">Comprometimento com a qualidade e resultados excepcionais</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Ética</h4>
              <p className="text-gray-600">Atuação baseada em princípios éticos e transparência</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Dedicação</h4>
              <p className="text-gray-600">Atendimento personalizado e focado nas necessidades do cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
