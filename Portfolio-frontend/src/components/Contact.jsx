import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {

  // Social/contact links data
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/aman-chauhan7",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/AmanChauhan29",
      color: "hover:text-gray-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:iamanchauhan29@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      link: "tel:+919935074990",
      color: "hover:text-green-400",
    },
    {
      name: "Resume",
      icon: <FaFileDownload />,
      link: "/Resume.pdf",
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0d0d0d] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Connect <span className="text-blue-500">With Me</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          Feel free to connect with me through any platform below.
          I’m always open to discussing DevOps, Backend Engineering,
          Cloud, Kubernetes, and exciting opportunities.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {contacts.map((contact) => (

            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#111] border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition duration-300 hover:scale-105 hover:border-blue-500 ${contact.color}`}
            >

              {/* Icon */}
              <div className="text-5xl">
                {contact.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold">
                {contact.name}
              </h3>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}