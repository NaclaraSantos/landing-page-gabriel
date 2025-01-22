

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">
            Advocacia Especializada em Direito Civel e Trabalhista
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Soluções jurídicas personalizadas com excelência e dedicação para seus direitos.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;