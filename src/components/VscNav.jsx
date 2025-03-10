import './VscNav.css'

export default function VscNav({activeSection, scrollToSection}) {
  const sections = [
    { name: "📂 portfolio", type: "folder" },
    { name: "📄 Intro.jsx", type: "file", index: 0 },
    { name: "📄 About.jsx", type: "file", index: 1 },
    { name: "📄 skills.jsx", type: "file", index: 2 },
    { name: "📄 Project.jsx", type: "file", index: 3 },
    { name: "📄 ThankYou.jsx", type: "file", index: 4 }
  ];


  return (
    <nav className="vscNav">
      {sections.map((section, idx) =>
        section.type === "folder" ? (
          <div key={idx} className="folder">{section.name}</div>
        ) : (
          <div
            key={idx}
            className={`file ${activeSection === section.index ? "active" : ""}`}
            onClick={() => scrollToSection(section.index)}
          >
            {section.name}
          </div>
        )
      )}
    </nav>
  )
}
