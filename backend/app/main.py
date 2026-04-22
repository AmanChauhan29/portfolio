from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev, later restrict to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


projects = [
    {
        "id": 1,
        "title": "Real-time CCTV Video Processing System",
        "desc": "A scalable GStreamer + Kafka + Kubernetes pipeline for real-time video ingestion, chunking, autoscaling, and analytics.",
        "tech": ["GStreamer", "Kafka", "Kubernetes", "MinIO"],
        "github": "https://github.com/AmanChauhan29",
        "demo": "#",
    },
    {
        "id": 2,
        "title": "DevOps CI/CD Automation",
        "desc": "ne using Jenkins, Docker, SonarQube, ArgoCD, and Kubernetes with GitOps workflow.",
        "tech": ["Jenkins", "Docker", "ArgoCD", "K8s"],
        "github": "https://github.com/AmanChauhan29",
        "demo": "#",
    },
    {
        "id": 3,
        "title": "Portfolio Website",
        "desc": "A modern developer portfolio built with React and Tailwind CSS, featuring animations and responsive UI.",
        "tech": ["React", "Tailwind", "Vite"],
        "github": "https://github.com/AmanChauhan29",
        "demo": "#",
    }
]

@app.get("/")
def root():
    return {"message": "Hello from FastAPI 🚀"}
@app.get("/projects")
def get_projects():
    return projects