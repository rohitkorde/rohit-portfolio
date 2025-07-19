import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    company: "T-Systems ICT India Pvt. Ltd.",
    role: "Consultant",
    period: "May 2023 - Present (2 years 3 months)",
    location: "Pune, Maharashtra, India",
    project: "Data Intelligence Hub (DIH)",
    description: "DIH is a Data Hub To share data, Dataspace is a Marketplace for Data, Where Clients can onboard themselves to procure EDC connectors to exchange data securely while maintaining sovereignty of their data.",
    contributions: [
      "Designed and developed the MSO microservice to automate and streamline component deployments to AWS via Rancher API",
      "Built backend services for DIH Portal to facilitate and manage customer onboarding",
      "Managed Kubernetes clusters using Rancher, ensuring service scalability and high availability",
      "Leveraged HashiCorp Vault for secure management of secrets and certificates"
    ],
    techs: ['java', 'spring', 'aws', 'kubernetes', 'docker', 'gitlab', 'vault', 'rancher']
  },
  {
    company: "HCL Technologies",
    role: "Consultant",
    period: "November 2021 - May 2023 (1 year 7 months)",
    project: "Loan Servicing (LNOS)",
    description: "At HCL Technologies, I served as a Technical Consultant on the Loan Servicing (LNOS) project for DBS, a prominent bank operating in Asia. LNOS catered to small to medium businesses seeking loans ranging from 5 to 100 crores.",
    contributions: [
      "Developed Java microservices using Spring Boot for loan servicing operations",
      "Leveraged AWS for scalable and reliable deployment of services",
      "Managed services in Docker containers orchestrated by Kubernetes",
      "Utilized Splunk for real-time monitoring of microservices logs",
      "Implemented SAGA pattern for transactional consistency across distributed systems"
    ],
    techs: ['java', 'spring', 'aws', 'docker', 'kubernetes', 'postgresql', 'splunk', 'vault']
  },
  {
    company: "Infosys",
    role: "Technology Analyst",
    period: "October 2019 - November 2021 (2 years 2 months)",
    location: "Pune, Maharashtra, India",
    project: "Customer Journey Manager",
    description: "The project aimed to comply with regulatory requirements imposed by ARPA by delivering appropriate product information to clients based on their preferences.",
    contributions: [
      "Adopted Java Spring Boot for microservice development, enabling modular and scalable architecture",
      "Utilized PostgreSQL for storing customer input data securely",
      "Implemented a Test-Driven Development approach using JUnit and Mockito",
      "Implemented Spring Security to protect backend APIs and integrated OAuth 2.0"
    ],
    techs: ['java', 'spring', 'aws', 'docker', 'postgresql', 'maven']
  },
  {
    company: "BNY Mellon | Pershing",
    role: "Application Developer",
    period: "August 2017 - October 2019 (2 years 3 months)",
    location: "Pune, Maharashtra, India",
    description: "Designed a platform that bridges digital and traditional assets.",
    contributions: [
      "Acquired comprehensive skills in Java development, laying a solid groundwork for subsequent professional growth",
      "Spearheaded the development of APIs using Spring Boot framework",
      "Acquired hands-on experience with PostgreSQL, mastering data management and storage principles",
      "Embraced modern development practices such as GitHub for version control, Jenkins Deployment Pipeline"
    ],
    techs: ['java', 'spring', 'postgresql', 'github', 'jenkins', 'maven']
  }
];
