# Portfolio Website

A modern, responsive personal portfolio website built to showcase my skills, projects, and experience as a full-stack developer. This project demonstrates proficiency in frontend development with React and backend API integration using FastAPI.

## 🚀 Features

- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Interactive UI**: Smooth animations and user-friendly interface
- **Dynamic Content**: Projects fetched from a REST API
- **Modern Tech Stack**: Leveraging the latest web technologies
- **Fast Performance**: Built with Vite for rapid development and optimized builds

## 🛠️ Tech Stack

### Frontend
- **React 19**: Latest version for component-based UI development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **FontAwesome**: Icon library for enhanced visuals
- **ESLint**: Code linting for maintainable code

### Backend
- **FastAPI**: High-performance Python web framework
- **CORS Middleware**: For secure cross-origin requests

## 📁 Project Structure

```
Portfolio/
├── backend/
│   └── app/
│       └── main.py          # FastAPI application
└── Portfolio-frontend/
    ├── public/              # Static assets
    ├── src/
    │   ├── components/      # React components (Hero, About, Skills, etc.)
    │   ├── assets/          # Images and media
    │   └── App.jsx          # Main app component
    ├── package.json         # Frontend dependencies
    └── vite.config.js       # Vite configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Setup Frontend**
   ```bash
   cd Portfolio-frontend
   npm install
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd backend
   pip install fastapi uvicorn
   uvicorn app.main:app --reload
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` for the frontend and `http://localhost:8000` for the API.

## 🎯 Skills Demonstrated

- **Frontend Development**: React hooks, component architecture, responsive design
- **Styling**: Tailwind CSS for modern, mobile-first design
- **API Integration**: Fetching data from REST APIs
- **Backend Development**: Building RESTful APIs with FastAPI
- **Version Control**: Git for project management
- **Build Tools**: Vite for efficient development workflow
- **Code Quality**: ESLint for code standards

## 📝 API Endpoints

- `GET /` - Welcome message
- `GET /projects` - List of featured projects

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. Any contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Aman Chauhan