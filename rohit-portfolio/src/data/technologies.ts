import { TechnologiesMap } from '../types';

export const technologies: TechnologiesMap = {
  java: { 
    name: 'Java', 
    url: 'https://docs.oracle.com/en/java/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/oracle.svg',
    fallback: '☕'
  },
  spring: { 
    name: 'Spring Boot', 
    url: 'https://spring.io/projects/spring-boot', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/springboot.svg',
    fallback: '🍃'
  },
  aws: { 
    name: 'AWS', 
    url: 'https://docs.aws.amazon.com/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazonwebservices.svg',
    fallback: '☁️'
  },
  docker: { 
    name: 'Docker', 
    url: 'https://docs.docker.com/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg',
    fallback: '🐳'
  },
  kubernetes: { 
    name: 'Kubernetes', 
    url: 'https://kubernetes.io/docs/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kubernetes.svg',
    fallback: '⚙️'
  },
  jenkins: { 
    name: 'Jenkins', 
    url: 'https://www.jenkins.io/doc/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/jenkins.svg',
    fallback: '🔧'
  },
  postgresql: { 
    name: 'PostgreSQL', 
    url: 'https://www.postgresql.org/docs/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postgresql.svg',
    fallback: '🐘'
  },
  maven: { 
    name: 'Maven', 
    url: 'https://maven.apache.org/guides/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/apachemaven.svg',
    fallback: '📦'
  },
  gradle: { 
    name: 'Gradle', 
    url: 'https://docs.gradle.org/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gradle.svg',
    fallback: '🔨'
  },
  git: { 
    name: 'Git', 
    url: 'https://git-scm.com/doc', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg',
    fallback: '📂'
  },
  github: { 
    name: 'GitHub', 
    url: 'https://docs.github.com/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg',
    fallback: '🐙'
  },
  gitlab: { 
    name: 'GitLab', 
    url: 'https://docs.gitlab.com/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gitlab.svg',
    fallback: '🦊'
  },
  kafka: { 
    name: 'Apache Kafka', 
    url: 'https://kafka.apache.org/documentation/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/apachekafka.svg',
    fallback: '📊'
  },
  splunk: { 
    name: 'Splunk', 
    url: 'https://docs.splunk.com/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/splunk.svg',
    fallback: '📈'
  },
  vault: { 
    name: 'HashiCorp Vault', 
    url: 'https://developer.hashicorp.com/vault', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vault.svg',
    fallback: '🔐'
  },
  rancher: { 
    name: 'Rancher', 
    url: 'https://ranchermanager.docs.rancher.com/', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/rancher.svg',
    fallback: '🐄'
  }
};