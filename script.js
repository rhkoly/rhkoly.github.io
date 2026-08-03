const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const englishToGerman = {
  "About": "Über mich",
  "Skills": "Kenntnisse",
  "Experience": "Berufserfahrung",
  "Business Projects": "Praxisprojekte",
  "Academic Projects": "Akademische Projekte",
  "Contact": "Kontakt",
  "DATA • AUTOMATION • ANALYTICS": "DATEN • AUTOMATISIERUNG • ANALYTIK",
  "Hi, I’m": "Hallo, ich bin",
  "Data Manager · Data Scientist · Workflow Automation Engineer": "Datenmanager · Data Scientist · Workflow-Automatisierungsingenieur",
  "I specialize in workflow automation, data science, and analytics, developing scalable data-processing solutions, machine learning models, and business intelligence dashboards using Python, SQL, Quadient Inspire, and Power BI.": "Ich spezialisiere mich auf Workflow-Automatisierung, Data Science und Analytik. Dabei entwickle ich skalierbare Datenverarbeitungslösungen, Machine-Learning-Modelle und Business-Intelligence-Dashboards mit Python, SQL, Quadient Inspire und Power BI.",
  "View my work": "Meine Projekte ansehen",
  "Download CV": "Lebenslauf herunterladen",
  "Based in Germany": "Standort Deutschland",
  "What I work with": "Meine Technologien",
  "ABOUT": "ÜBER MICH",
  "Combining mathematical thinking with practical automation.": "Mathematisches Denken kombiniert mit praktischer Automatisierung.",
  "I am a Data Science graduate with a strong background in applied mathematics and professional experience in data management, analysis and reporting. My work focuses on preparing, validating and transforming data, developing automated workflows and delivering dependable outputs for complex customer communication projects.": "Ich habe einen Abschluss im Bereich Data Science und verfüge über einen starken Hintergrund in angewandter Mathematik sowie Berufserfahrung in Datenmanagement, Analyse und Reporting. Meine Arbeit konzentriert sich auf die Aufbereitung, Validierung und Transformation von Daten, die Entwicklung automatisierter Workflows und die zuverlässige Umsetzung komplexer Kundenkommunikationsprojekte.",
  "Years in current data role": "Jahre in meiner aktuellen Datenrolle",
  "Applied Mathematics & Data Science": "Angewandte Mathematik & Data Science",
  "German proficiency": "Deutschkenntnisse",
  "SKILLS": "KENNTNISSE",
  "Tools and capabilities": "Werkzeuge und Kompetenzen",
  "Programming & Data": "Programmierung & Daten",
  "Analytics & Visualisation": "Analytik & Visualisierung",
  "Automation & Machine Learning": "Automatisierung & Machine Learning",
  "EXPERIENCE": "BERUFSERFAHRUNG",
  "Professional journey": "Mein beruflicher Werdegang",
  "Jul 2023 — Present": "Juli 2023 — heute",
  "Data Manager": "Datenmanager",
  "Develop automated data-processing workflows using Quadient Inspire.": "Entwicklung automatisierter Datenverarbeitungs-Workflows mit Quadient Inspire.",
  "Prepare, clean, validate and transform Excel, PDF, CSV and other data sources.": "Aufbereitung, Bereinigung, Validierung und Transformation von Excel-, PDF-, CSV- und weiteren Datenquellen.",
  "Design personalised communications for print and email campaigns.": "Gestaltung personalisierter Kommunikation für Print- und E-Mail-Kampagnen.",
  "Deliver automation solutions for banking, utilities, IHK and election projects.": "Umsetzung von Automatisierungslösungen für Banken, Energieversorger, IHK- und Wahlprojekte.",
  "Troubleshoot complex processing issues and improve workflow performance.": "Analyse komplexer Verarbeitungsprobleme und Optimierung der Workflow-Leistung.",
  "Nov 2015 — Sep 2018": "Nov. 2015 — Sept. 2018",
  "Merchandising & Business Data Analyst": "Merchandising- & Business-Data-Analyst",
  "Analysed business data and contributed to a 10% sales increase.": "Analyse von Geschäftsdaten und Beitrag zu einer Umsatzsteigerung von 10 %.",
  "Created management reports and dashboards.": "Erstellung von Managementberichten und Dashboards.",
  "Supported pricing and product optimisation, improving gross margin by 5%.": "Unterstützung bei Preis- und Produktoptimierungen mit einer Verbesserung der Bruttomarge um 5 %.",
  "BUSINESS PROJECTS": "PRAXISPROJEKTE",
  "Real-world workflow automation": "Workflow-Automatisierung aus der Praxis",
  "Generalized case studies based on professional experience. No customer data, internal source files, or confidential business information are included.": "Verallgemeinerte Fallstudien auf Grundlage meiner Berufserfahrung. Es werden keine Kundendaten, internen Quelldateien oder vertraulichen Geschäftsinformationen veröffentlicht.",
  "FEATURED PROJECT": "HERVORGEHOBENES PROJEKT",
  "Enterprise Document Automation Workflow": "Enterprise-Workflow zur automatisierten Dokumentenproduktion",
  "Designed and developed a modular workflow for recurring, high-volume customer communication and print production.": "Konzeption und Entwicklung eines modularen Workflows für die wiederkehrende Verarbeitung großer Mengen personalisierter Kundenkommunikation und Druckdaten.",
  "The generalized solution receives customer-supplied PDF data, validates incoming files, separates faulty documents, transforms valid records, generates personalized German customer letters, applies postal registration formatting, performs production sorting, and creates print-ready output.": "Die verallgemeinerte Lösung verarbeitet von Kunden bereitgestellte PDF-Daten, validiert eingehende Dateien, trennt fehlerhafte Dokumente, transformiert gültige Datensätze, erzeugt personalisierte deutsche Kundenbriefe, wendet Postregistrierungsformate an, sortiert die Produktionsdaten und erstellt druckfertige Ausgaben.",
  "Key capabilities": "Zentrale Funktionen",
  "Automated recurring PDF-to-print processing": "Automatisierte, wiederkehrende Verarbeitung von PDF- zu Druckdaten",
  "Validated incoming customer documents": "Validierung eingehender Kundendokumente",
  "Separated faulty PDFs into a controlled review queue": "Trennung fehlerhafter PDF-Dateien in eine kontrollierte Prüfwarteschlange",
  "Transformed valid data into structured production records": "Transformation gültiger Daten in strukturierte Produktionsdatensätze",
  "Generated personalized German customer letters": "Erstellung personalisierter deutscher Kundenbriefe",
  "Applied postal registration and sorting rules": "Anwendung von Postregistrierungs- und Sortierregeln",
  "Created print-ready output and operational reporting": "Erstellung druckfertiger Ausgaben und betrieblicher Berichte",
  "Workflow Automation": "Workflow-Automatisierung",
  "PDF Processing": "PDF-Verarbeitung",
  "Data Validation": "Datenvalidierung",
  "Variable Data Printing": "Variabler Datendruck",
  "Print Production": "Druckproduktion",
  "Open Full Simulation": "Vollständige Simulation öffnen",
  "View GitHub Repository": "GitHub-Repository ansehen",
  "Interactive workflow simulation": "Interaktive Workflow-Simulation",
  "Open ↗": "Öffnen ↗",
  "SELECTED WORK": "AUSGEWÄHLTE ARBEITEN",
  "Project areas": "Projektbereiche",
  "These summaries describe capability areas without exposing confidential client data.": "Diese Zusammenfassungen beschreiben Kompetenzbereiche, ohne vertrauliche Kundendaten offenzulegen.",
  "Automated Data Workflows": "Automatisierte Datenworkflows",
  "Reusable workflows for importing, cleaning, validating and transforming high-volume customer data.": "Wiederverwendbare Workflows zum Importieren, Bereinigen, Validieren und Transformieren großer Mengen von Kundendaten.",
  "Personalised Communications": "Personalisierte Kommunikation",
  "Data-driven print and email outputs with personalisation, postal preparation and production controls.": "Datenbasierte Print- und E-Mail-Ausgaben mit Personalisierung, postalischer Vorbereitung und Produktionskontrollen.",
  "Business Analytics": "Business Analytics",
  "Dashboards and reports that identify trends, support pricing decisions and communicate results clearly.": "Dashboards und Berichte zur Erkennung von Trends, Unterstützung von Preisentscheidungen und klaren Kommunikation von Ergebnissen.",
  "ACADEMIC PROJECTS": "AKADEMISCHE PROJEKTE",
  "Selected data science and machine learning projects": "Ausgewählte Projekte aus Data Science und Machine Learning",
  "Projects completed during my master's studies in applied mathematics, data science and computational intelligence.": "Projekte aus meinem Masterstudium in angewandter Mathematik, Data Science und Computational Intelligence.",
  "SEIR Epidemiological Model": "SEIR-Epidemiologiemodell",
  "A mathematical modelling project focused on simulating the spread of infectious diseases using the Susceptible–Exposed–Infected–Recovered model.": "Ein mathematisches Modellierungsprojekt zur Simulation der Ausbreitung von Infektionskrankheiten mit dem Susceptible–Exposed–Infected–Recovered-Modell.",
  "Mathematical Modelling": "Mathematische Modellierung",
  "Machine Learning Classification": "Machine-Learning-Klassifikation",
  "A classification project covering data preparation, model training, comparison and evaluation using machine learning methods.": "Ein Klassifikationsprojekt mit Datenaufbereitung, Modelltraining, Modellvergleich und Bewertung mithilfe verschiedener Machine-Learning-Methoden.",
  "Classification": "Klassifikation",
  "Time-Series Prediction Using Recurrent Models": "Zeitreihenprognose mit rekurrenten Modellen",
  "A time-series forecasting project exploring recurrent neural-network models for learning patterns in sequential data and generating predictions.": "Ein Zeitreihenprognoseprojekt, das rekurrente neuronale Netze zur Erkennung von Mustern in sequenziellen Daten und zur Erstellung von Vorhersagen untersucht.",
  "Time Series": "Zeitreihen",
  "Recurrent Models": "Rekurrente Modelle",
  "Malaria Data Analysis Using R": "Malaria-Datenanalyse mit R",
  "An exploratory data-analysis project using R to investigate malaria data, identify patterns and communicate findings through statistical analysis and visualisation.": "Ein exploratives Datenanalyseprojekt mit R zur Untersuchung von Malariadaten, Erkennung von Mustern und Darstellung der Ergebnisse durch statistische Analysen und Visualisierungen.",
  "Data Analysis": "Datenanalyse",
  "Visualisation": "Visualisierung",
  "GitHub repository": "GitHub-Repository",
  "Read report": "Bericht lesen",
  "EDUCATION": "AUSBILDUNG",
  "Academic background": "Akademischer Hintergrund",
  "M.Sc. Applied Mathematics for Networking & Data Science": "M.Sc. Angewandte Mathematik für Networking & Data Science",
  "Mittweida University of Applied Sciences, Germany": "Hochschule Mittweida, Deutschland",
  "B.Sc. Mathematics": "B.Sc. Mathematik",
  "Shahjalal University of Science and Technology, Bangladesh": "Shahjalal University of Science and Technology, Bangladesch",
  "CONTACT": "KONTAKT",
  "Let’s connect.": "Lassen Sie uns vernetzen.",
  "I’m open to opportunities involving data management, analytics, workflow automation and data science.": "Ich bin offen für berufliche Möglichkeiten in den Bereichen Datenmanagement, Analytik, Workflow-Automatisierung und Data Science.",
  "Email me": "E-Mail senden",
  "Built with HTML, CSS and GitHub Pages.": "Erstellt mit HTML, CSS und GitHub Pages."
};

const germanToEnglish = Object.fromEntries(
  Object.entries(englishToGerman).map(([english, german]) => [german, english])
);

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function translateTextNodes(dictionary) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return normalizeText(node.nodeValue)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    }
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const normalized = normalizeText(node.nodeValue);
    const translated = dictionary[normalized];

    if (translated) {
      const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
      const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leading}${translated}${trailing}`;
    }
  });
}

function setLanguage(language) {
  const currentLanguage = document.documentElement.lang || "en";
  if (currentLanguage === language) return;

  if (language === "de") {
    translateTextNodes(englishToGerman);
  } else {
    translateTextNodes(germanToEnglish);
  }

  document.documentElement.lang = language;
  localStorage.setItem("portfolioLanguage", language);

  document.querySelectorAll(".language-button").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const savedLanguage = localStorage.getItem("portfolioLanguage") || "en";
if (savedLanguage === "de") setLanguage("de");
