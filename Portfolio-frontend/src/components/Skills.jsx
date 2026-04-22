import { FaReact, FaPython, FaDocker, FaAws, FaLinux, FaGitAlt, FaDatabase  } from "react-icons/fa";
import { SiJavascript, SiKubernetes, SiFastapi, SiTerraform, SiJenkins, SiApachekafka } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Jenkins", icon: <SiJenkins size={40} color="#FFE0B2" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "Databases", icon: <FaDatabase size={40} color="#ab3792" /> },
    { name: "Docker", icon: <FaDocker size={40} color="#2496ED" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={40} color="#326CE5" /> },
    { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> },
    { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: "Terraform", icon: <SiTerraform size={40} color="#623CE4" /> },
    { name: "GStreamer/FFmpeg", icon: <FaPython size={40} color="#3776AB" /> },
    { name: "Kafka", icon: <SiApachekafka size={40} color="#2496ED" /> },
    { name: "Linux", icon: <FaLinux size={40} color="#FCC625" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0d0d0d] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-[#161616] transition group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                {skill.icon}
              </div>
              <p className="text-gray-300 font-medium group-hover:text-white transition">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}