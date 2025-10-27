export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developer passionate about technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a Full Stack Developer with experience in modern technologies
                like React, Next.js, Node.js, and TypeScript. My passion is creating
                web applications that not only work well but also provide
                an exceptional user experience.
              </p>
              <p>
                With a background in software development and practical experience
                in various projects, I always seek to learn new technologies and
                improve my skills to deliver increasingly efficient and innovative solutions.
              </p>
              <p>
                I believe technology should be accessible and useful for everyone,
                which is why I dedicate myself to creating intuitive interfaces and
                robust applications that solve real problems.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                What I Do
              </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Frontend Development with React/Next.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Backend Development with Node.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Responsive Interface Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">API and Database Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
