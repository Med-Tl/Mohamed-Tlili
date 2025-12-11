import { Project, SkillCategory, Certification } from './types';

export const personalInfo = {
  name: "Tlili Mohamed",
  role: "DevOps Engineer | Cloud Infrastructure",
  email: "hammatlili666@gmail.com",
  location: "Kairouan, Tunisia",
  linkedin: "mohamed-tlili11",
  github: "Med-Tl",
  gitlab: "Med-Tl",
  linktree: "https://linktr.ee/mohamed_tlili11",
  cv: "https://drive.google.com/file/d/1j6cKdknTYNN-_6lEh9yI3enDjl3uWa4Y/view?usp=sharing",
  bio: "Passionate about automating deployments, monitoring distributed systems, and building scalable cloud infrastructure. Transforming complex problems into elegant solutions through DevOps practices.",
  aboutLong: "I'm a Computer Systems Networking graduate from ISET Kairouan with a strong foundation in DevOps, cloud infrastructure, and network administration. Passionate about automating deployments and monitoring distributed systems, I've gained hands-on experience through both academic projects and professional internships. I thrive in environments that embrace agile methodologies and cutting-edge technologies."
};

// Logos fetched from Devicon CDN
export const skillsData: SkillCategory[] = [
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Jenkins", percentage: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitLab CI", percentage: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Docker", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", percentage: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    ]
  },
  {
    title: "Cloud & Systems",
    skills: [
      { name: "AWS", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Linux (Ubuntu)", percentage: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
      { name: "Tomcat", percentage: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg" },
      { name: "Bash Scripting", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    ]
  },
  {
    title: "Monitoring & Security",
    skills: [
      { name: "Prometheus", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", percentage: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "SonarQube", percentage: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
      { name: "OWASP ZAP", percentage: 70, logo: "https://www.zaproxy.org/img/zap32x32.png" }, // Custom URL as not in all CDN versions
    ]
  },
  {
    title: "Development",
    skills: [
      { name: "Java", percentage: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Git", percentage: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Maven", percentage: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Inventory Dashboard Web App",
    company: "Personal Enterprise Project",
    description: "Designed to manage inventory and sales for small businesses. Developed in Java 17 using Maven with a JSP front-end and deployed on Tomcat. Demonstrates full DevOps practices including CI/CD, security scanning, and monitoring.",
    tags: ["Java 17", "Tomcat", "Maven", "JSP", "Docker"],
    link: "https://github.com/Med-Tl/Inventory-Dashboard"
  },
  {
    title: "Secure DevSecOps Pipeline",
    company: "Personal Enterprise Project",
    description: "Implemented a comprehensive secure CI/CD pipeline. Features include automated deployment to Tomcat 9, SAST analysis with SonarQube, DAST with OWASP ZAP, and full observability using Prometheus and Grafana on Ubuntu VMs.",
    tags: ["Jenkins", "SonarQube", "OWASP ZAP", "Grafana", "Prometheus"],
    link: "https://github.com/Med-Tl/easy"
  },
  {
    title: "CI/CD Automation for Web Apps",
    company: "IT-Gate",
    description: "Developed a complete CI/CD pipeline for microservices-based web applications. Deployed front-end and back-end services in a Kubernetes cluster, integrated Docker for containerization, and implemented GitLab CI for continuous integration and delivery.",
    tags: ["GitLab CI/CD", "Docker", "Kubernetes", "Helm", "ArgoCD"],
    link: "https://gitlab.com/Med-Tl/pfe-frontend"
  },
  {
    title: "Secure Corporate Network Design",
    company: "Tunisie Telecom",
    description: "Designed and simulated a secure enterprise network using Packet Tracer for Tunisie Telecom's branch office, including inter-VLAN routing, DHCP services, and OSPF-based WAN connections between branches.",
    tags: ["Cisco Packet Tracer", "OSPF", "VLAN", "DHCP", "Network Security"]
  },
  {
    title: "Terraform IaC for AWS Infrastructure",
    company: "Private Project",
    description: "Created reusable Terraform modules to provision AWS infrastructure (EC2, RDS, S3) in a DevOps project. Managed resources using code and automated deployments to ensure consistency and scalability.",
    tags: ["Terraform", "AWS EC2", "RDS", "S3", "GitLab CI/CD"]
  },
  {
    title: "Local DevOps CI/CD Pipeline",
    company: "ISET Kairouan",
    description: "Built a complete local DevOps pipeline from scratch — CI with Jenkins, Maven, SonarQube, and Docker; CD with ArgoCD, Helm, and Kubernetes. Integrated full observability stack with Prometheus, Grafana, and ELK.",
    tags: ["Jenkins", "Maven", "SonarQube", "Docker", "ArgoCD", "Helm", "Kubernetes", "Prometheus"],
    link: "https://github.com/Med-Tl/devops-demo-project"
  }
];

export const certificationsData: Certification[] = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "Currently in Progress",
    status: "In Progress",
    description: "Foundational course covering AWS cloud concepts, services, security, architecture, pricing, and support."
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "July 06, 2025",
    status: "Earned",
    description: "Interactive cloud learning experience covering AWS fundamentals.",
    credentialUrl: "https://www.credly.com/badges/96f02239-d772-4d7d-969e-028413e7907b"
  },
  {
    name: "Ultimate Terraform and OpenTofu",
    issuer: "Udemy : Gourav Shah",
    date: "July 24, 2025",
    status: "Earned",
    description: "Practical training in Infrastructure as Code (IaC) using Terraform.",
    credentialUrl: "https://www.udemy.com/certificate/UC-ece23408-2e66-460d-9392-b06a9620d1e5/"
  },
  {
    name: "Introduction to Linux Forensics",
    issuer: "Udemy : Digital Dojo",
    date: "February 27, 2025",
    status: "Earned",
    description: "Comprehensive introduction to Linux forensics techniques.",
    credentialUrl: "https://www.udemy.com/certificate/UC-d20828d9-878b-4c56-82b8-4efea4cfe17c/"
  },
  {
    name: "CCNA: Enterprise Networking, Security & Automation",
    issuer: "Cisco Networking Academy",
    date: "December 4, 2024",
    status: "Earned",
    description: "Advanced networking concepts including design and security.",
    credentialUrl: "https://www.credly.com/badges/b2e6c143-5470-493a-b06d-f4b253f3a7aa"
  },
  {
    name: "CCNA: Introduction to Networking",
    issuer: "Cisco Networking Academy",
    date: "November 27, 2024",
    status: "Earned",
    description: "Fundamental networking concepts, protocols, and technologies.",
    credentialUrl: "https://www.credly.com/badges/387a9a9a-7b5b-4c86-87eb-6bf396f02c5b/linked_in_profile"
  },
  {
    name: "Git and GitHub",
    issuer: "DataScience",
    date: "November 9, 2024",
    status: "Earned",
    description: "Version control fundamentals and best practices.",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-0437B90948/"
  },
  {
    name: "Junior Cybersecurity Analyst Pathway",
    issuer: "Cisco Networking Academy",
    date: "June 22, 2024",
    status: "Earned",
    description: "Cybersecurity fundamentals, threat analysis, and response.",
    credentialUrl: "https://www.credly.com/badges/a6694be5-cebc-41ee-85d6-152dc6a44910"
  }
];