import { skills, SkillCategory } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to create digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category: SkillCategory) => (
            <div
              key={category.name}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill: { name: string; level: number }) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
