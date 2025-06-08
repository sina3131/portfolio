import {
  mobile,
  backend,
  creator,
  web,  
  git,
  docker,
  python,
  aws,
  azure,
  sql,
  carrent,
  jobit,
  tripguide,
  substorm,
  intelliplan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Azure cloud services",
    icon: web,
  },
  {
    title: "RAG applications",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI-Driven Business Development",
    icon: creator,
  },
];

const technologies = [
{
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Ai business development & Sales responsible",
    company_name: "Substorm",
    icon: substorm,
    iconBg: "#383E56",
    date: "2024 - present",
    points: [
      "At Substorm, I wear both the tech and business hats—working part-time in business and sales development for our AI and machine learning services.",
      "My role focuses on identifying potential clients, understanding their challenges, and clearly communicating how our solutions can create real value.",
      "I lead the early-stage conversations, build relationships, and tailor our offering to meet each client’s unique needs.",
      "Once there's a fit, I bring in the right technical experts from our team to collaborate and deliver impactful results. It’s a fast-moving, team-driven process where strategy meets innovation—and I love being right at the intersection.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Substorm",
    icon: substorm,
    iconBg: "#383E56",
    date: "2025 - present",
    points: [
      "I’ve been part of a team developing AI-powered solutions for automating the redaction of sensitive information in documents",
       "Our service, currently used by Swedish courts, has also been expanded into ascalable SaaS platform for broader use by government agencies such as municipalities.",
      "My role has focused on backend development, delivering new features, ensuring service reliability, and driving continuous improvement.",
      "The tech stack includes Azure, Python, Docker, and some React. Our work helps clients securely handle sensitive data with efficiency and compliance.",
    ],
  },
  {
    title: "Junior Backend Developer",
    company_name: "Substorm",
    icon: substorm,
    iconBg: "#383E56",
    date: "2025 - present",
    points: [
      "At Substorm, I’ve been actively involved in the ongoing development of our AI platform, which hosts a suite of AI-driven tools.",
      "My role spans implementing new modules, resolving technical issues, and enhancing the performance and functionality of existing solutions.",
      "Working within a tech stack that includes Azure, Python, Docker, and React, I focus on delivering robust, scalable improvements that strengthen the platform's overall value to users.",
    ],
  },

  {
    title: "ML Developer",
    company_name: "Intelliplan",
    icon: intelliplan,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "In this assignment, I worked with SQL agents from the Autogen library, focusing on customizing the agent to translate natural language (NL) into SQL queries and fetch data from the database.",
      "We incorporated Retrieval-Augmented Generation (RAG) to enhance the accuracy and relevance of the SQL queries generated from the natural language inputs.",
    ],
  },
  {
    title: "ML Developer",
    company_name: "Substorm",
    icon: substorm,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "In this in-house project, I built a cloud-based service using OpenAI’s Whisper model for transcribing MP3 audio files. Once a file is uploaded, the system transcribes the speech and passes the text to a custom language model for sentiment analysis.",
      "The results are stored securely on AWS. The solution uses AWS Lambda for serverless execution, S3 for storage, and EC2 to run Whisper efficiently—ensuring a scalable, reliable workflow from upload to analysis.",
    ],
  },
  {
    title: "ML developer",
    company_name: "Substorm",
    icon: substorm,
    iconBg: "#383E56",
    date: "2023 - 2023",
    points: [
      "In this project, I fine-tuned the Ollama and Mistral models to generate and convert natural language into SQL queries.",
      "I experimented with various datasets and adjusted parameters such as the number of epochs and iterations to optimize performance.",
      "While the results were not flawless, they showed significant improvement and were quite promising, demonstrating the potential of these models for accurate natural language to SQL query translation.",
    ],
  },
  {
    title: "ML Developer",
    company_name: "Substorm",
    icon: substorm,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "I worked on a project using Retrieval-Augmented Generation (RAG) to recommend the best candidates based on user queries. I used tools like Python, LLMs, vector databases, Hugging Face, and LangChain to build and improve the system",
      "This experience strengthened my skills in recommendation systems, NLP, and machine learning, while also deepening my understanding of applying advanced AI techniques in real-world solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Completed a comprehensive Machine Learning and Python programming program at Nackademin (08/2022–04/2024), combining technical theory with hands-on projects. Gained practical experience in building ML models, web applications, and data pipelines using Python, SQL, Django, and foundational HTML/CSS. Developed strong skills in data analysis with Pandas and NumPy, and implemented machine learning and deep learning models using TensorFlow and PyTorch. The program emphasized real-world applications, bridging the gap between technical development and business impact.",
    name: "Nackademin",
    company: "Stockholm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ916AbtxNDIDG-UdT7AkVp_Rwrtio4PAqc-g&s",
    title:"Python, AI && machine learning"
  },
  {
    testimonial:
      "Completed a hands-on course in Ethical Hacking and Penetration Testing at Edugrade (09/2024–12/2024), focused on real-world cybersecurity challenges through Capture the Flag (CTF) exercises. Gained practical skills in identifying, exploiting, and remediating vulnerabilities using tools like Kali Linux and Wireshark. Covered key areas such as attack methodologies, web application security, cryptography, and incident response. The course provided a strong foundation in both offensive and defensive cybersecurity strategies, preparing me to tackle complex security threats in real-world environments.",
    name: "Edugrade",
    company: "Remote",
    image: "https://pbs.twimg.com/profile_images/1092406784365596672/y2LYq2NS_400x400.jpg",
    title:"Etichal hacking"
  },
  {
    testimonial:
      "Completed a 90-credit economics program at Södertörn University (01/2021–09/2022), offering a solid foundation in macroeconomics, microeconomics, and econometrics. Gained analytical and practical skills essential for understanding market dynamics, policy-making, and business strategy. My Bachelor's thesis explored Okun's Law in the Nordic countries, examining the link between economic growth and unemployment through data analysis and applied research. This program sharpened my ability to translate economic theory into real-world insights and solutions.",
    name: "Södertörn University",
    company: "Stockholm",
    image: "https://flemingsbergscience.se/wp-content/uploads/2019/10/sh-grundare_new.png.webp",
    title: "Economics"
  },
];

const projects = [
  {
    name: "Coming soon",
    description:
      "Project descptions",
    tags: [
      {
        name: "tech",
        color: "blue-text-gradient",
      },
      {
        name: "tech",
        color: "green-text-gradient",
      },
      {
        name: "tech",
        color: "pink-text-gradient",
      },
    ],
    image:"",
    source_code_link: "link to project",
  },
  {
    name: "Coming soon",
    description:
      "Project description",
    tags: [
      {
        name: "tech",
        color: "blue-text-gradient",
      },
      {
        name: "tech",
        color: "green-text-gradient",
      },
      {
        name: "tech",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "link",
  },
  {
    name: "Coming soon",
    description:
      "Project description",
    tags: [
      {
        name: "tech",
        color: "blue-text-gradient",
      },
      {
        name: "tech",
        color: "green-text-gradient",
      },
      {
        name: "tech",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "link",
  },
];

export { services, technologies, experiences, testimonials, projects };
