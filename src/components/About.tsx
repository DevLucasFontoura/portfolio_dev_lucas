export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia e inovação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Minha História
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Sou um desenvolvedor Full Stack com experiência em tecnologias modernas
                como React, Next.js, Node.js e TypeScript. Minha paixão é criar
                aplicações web que não apenas funcionam bem, mas também proporcionam
                uma experiência excepcional ao usuário.
              </p>
              <p>
                Com formação em desenvolvimento de software e experiência prática
                em diversos projetos, sempre busco aprender novas tecnologias e
                melhorar minhas habilidades para entregar soluções cada vez mais
                eficientes e inovadoras.
              </p>
              <p>
                Acredito que a tecnologia deve ser acessível e útil para todos,
                por isso me dedico a criar interfaces intuitivas e aplicações
                robustas que resolvem problemas reais.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              O que eu faço
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Desenvolvimento Frontend com React/Next.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Desenvolvimento Backend com Node.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Design de Interfaces Responsivas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Integração com APIs e Bancos de Dados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Otimização de Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
