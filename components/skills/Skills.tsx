import { Skill } from "@/props";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 max-w-3xl xl:max-w-6xl">
      <h2 className="text-2xl font-bold text-secondary mb-3">
        Technologies
      </h2>

      {/* mapping the technologies */}

      <div className="flex flex-wrap justify-center">
        <Skill
          domain="DevOps Tools"
          logo={[
            "/logos/google-cloud.svg",
            "/logos/azure.svg",
            "/logos/git.svg",
            "/logos/gitlab.svg",
            "/logos/sonarqube.svg",
            "/logos/docker.svg",
            "/logos/kubernetes.svg",
            "/logos/helm.svg",
            "/logos/argocd.svg",
            "/logos/terraform.svg",
            "/logos/ansible.svg",
            "/logos/nginx.svg",
            "/logos/linux.svg",
            "/logos/bash.svg",
            "/logos/nodejs.svg",
            "/logos/python.svg",
          ]}
          tech={[
            "Google Cloud Platform",
            "Microsoft Azure",
            "Git",
            "GitLab",
            "SonarQube",
            "Docker",
            "Kubernetes",
            "Helm",
            "ArgoCD",
            "Terraform",
            "Ansible",
            "NGINX",
            "Linux",
            "Bash",
            "Node.js",
            "Python",
          ]}
          url={[
            "https://cloud.google.com",
            "https://azure.microsoft.com",
            "https://git-scm.com",
            "https://about.gitlab.com",
            "https://www.sonarqube.org",
            "https://www.docker.com",
            "https://kubernetes.io",
            "https://helm.sh",
            "https://argo-cd.readthedocs.io",
            "https://www.terraform.io",
            "https://www.ansible.com",
            "https://www.nginx.com",
            "https://www.linux.org",
            "https://www.gnu.org/software/bash",
            "https://nodejs.org",
            "https://www.python.org",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
