import { TechnologiesMap } from '../types';

export const technologies: TechnologiesMap = {
  java: {
    name: 'Java',
    url: 'https://docs.oracle.com/en/java/',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    fallback: '☕'
  },
  spring: {
    name: 'Spring Boot',
    url: 'https://spring.io/projects/spring-boot',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg',
    fallback: '🍃'
  },
  aws: {
    name: 'AWS',
    url: 'https://docs.aws.amazon.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    fallback: '☁️'
  },
  docker: {
    name: 'Docker',
    url: 'https://docs.docker.com/',
    logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
    fallback: '🐳'
  },
  kubernetes: {
    name: 'Kubernetes',
    url: 'https://kubernetes.io/docs/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    fallback: '⚙️'
  },
  jenkins: {
    name: 'Jenkins',
    url: 'https://www.jenkins.io/doc/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg',
    fallback: '🔧'
  },
  postgresql: {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/docs/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    fallback: '🐘'
  },
  maven: {
    name: 'Maven',
    url: 'https://maven.apache.org/guides/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg',
    fallback: '📦'
  },
  gradle: {
    name: 'Gradle',
    url: 'https://docs.gradle.org/',
    logo: 'https://gradle.org/images/gradle-knowledge-graph-logo.png',
    fallback: '🔨'
  },
  git: {
    name: 'Git',
    url: 'https://git-scm.com/doc',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    fallback: '📂'
  },
  github: {
    name: 'GitHub',
    url: 'https://docs.github.com/',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    fallback: '🐙'
  },
  gitlab: {
    name: 'GitLab',
    url: 'https://docs.gitlab.com/',
    logo: 'https://about.gitlab.com/images/press/logo/svg/gitlab-logo-gray-rgb.svg',
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
    logo: 'https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo-black.svg',
    fallback: '📈'
  },
  vault: {
    name: 'HashiCorp Vault',
    url: 'https://developer.hashicorp.com/vault',
    logo: 'https://www.datocms-assets.com/2885/1620155116-brandhcvaultverticalcolor.svg',
    fallback: '🔐'
  },
  rancher: {
    name: 'Rancher',
    url: 'https://ranchermanager.docs.rancher.com/',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/rancher.svg',
    fallback: '🐄'
  },
  mongodb: {
    name: 'MongoDB',
    url: 'https://docs.mongodb.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    fallback: '🍃'
  }
};