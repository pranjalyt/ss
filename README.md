# Shanu Sir Classes - Full-Stack Website

A modern, minimal black and white themed website for India's No. 1 Mobile Repairing Training Institute.

## Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool
- **Vanilla CSS** - Pure black and white design system

## Project Structure

```
ssclasses/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI application
│   │   ├── models.py            # Pydantic models
│   │   ├── routes/
│   │   │   ├── contact.py       # Contact form endpoint
│   │   │   └── courses.py       # Courses API endpoint
│   │   └── data/
│   │       └── courses_data.py  # Course syllabus data
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── styles/              # CSS files
│   │   ├── App.jsx              # Main app with routing
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Quick Start

### Easy Development Setup (Recommended)

The easiest way to run both frontend and backend together:

```bash
# From the project root
python run.py
```

This will:
- Check for required dependencies (Python, Node.js)
- Install all dependencies automatically
- Start both servers in parallel
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

Press `Ctrl+C` to stop both servers.

### Manual Setup

If you prefer to run servers separately:

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Mac/Linux
   # or
   venv\Scripts\activate  # On Windows
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```

   The backend will be available at `http://localhost:8000`

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

## Deployment

### Deploy to Vercel

This project is configured for easy deployment to Vercel.

#### First-Time Setup

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from project root:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: (default or custom)
   - Directory: `./` (project root)

5. Your site will be deployed! You'll get a URL like:
   - `https://your-project.vercel.app`

#### Environment Variables (Optional)

If you want to use a custom domain, set the `PRODUCTION_DOMAIN` environment variable in Vercel:

1. Go to your project in Vercel Dashboard
2. Settings → Environment Variables
3. Add: `PRODUCTION_DOMAIN` = `yourdomain.com`

#### Production Deployment

For production deployment via Git:

1. Push your code to GitHub
2. Import the repository in Vercel Dashboard
3. Vercel will automatically detect the configuration
4. Deploy!

Every push to your main branch will trigger a new deployment.

#### Vercel Configuration

The project includes:
- `vercel.json` - Routes API requests to serverless functions
- `api/index.py` - Serverless wrapper for FastAPI backend
- `.vercelignore` - Excludes unnecessary files from deployment

## Features

### Pages
- **Home** - Hero section, mentor intro, institute overview, course highlights, testimonials
- **Courses** - Overview of all 4 training modules
- **Syllabus** - Detailed expandable syllabus for each module
- **About** - Institute history, mission, and features
- **Contact** - Contact information, map placeholder, and contact form

### Design
- Pure black (#000000) and white (#FFFFFF) color scheme
- Subtle grid-line animations
- Smooth micro-animations on hover
- Fully responsive mobile design
- Modern minimal aesthetic

### Backend API Endpoints
- `GET /` - Health check
- `GET /api/courses/` - Get all course modules
- `GET /api/courses/{module_id}` - Get specific module
- `POST /api/contact/` - Submit contact form

## Customization

### Replace Hero Background Image

Edit `/frontend/src/components/Hero.css` and update the `background-image` property:

```css
.hero {
  background-image: url('/path/to/your/image.jpg');
}
```

### Add Google Maps Embed

Edit `/frontend/src/pages/Contact.jsx` and replace the map placeholder:

```jsx
<div className="map-placeholder">
  <iframe
    src="YOUR_GOOGLE_MAPS_EMBED_URL"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
```

### Update Contact Information

Edit the contact details in:
- `/frontend/src/components/ContactStrip.jsx`
- `/frontend/src/pages/Contact.jsx`


## Production Build

### Frontend
```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/`

### Backend
For production deployment, use a production ASGI server configuration with proper environment variables.

## Course Modules

1. **Basic Module** - Mobile phone fundamentals, hardware components, basic repairs
2. **Software Module** - Android/iOS software, flashing, unlocking, troubleshooting
3. **Advanced Hardware Module** - Chip-level repair, motherboard architecture, BGA work
4. **eMMC & UFS Training** - Memory technology, programming, data recovery

## License

© 2024 Shanu Sir Classes. All rights reserved.
