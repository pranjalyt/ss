#!/usr/bin/env python3
"""
Development runner for Shanu Sir Classes
Starts both frontend (Vite) and backend (FastAPI) servers
"""

import subprocess
import sys
import os
import time
import signal
from pathlib import Path

# ANSI color codes for terminal output
class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_colored(message, color):
    """Print colored message to console"""
    print(f"{color}{message}{Colors.ENDC}")

def print_header(message):
    """Print a formatted header"""
    print("\n" + "="*60)
    print_colored(message, Colors.HEADER + Colors.BOLD)
    print("="*60 + "\n")

def check_command(command, name):
    """Check if a command is available"""
    try:
        subprocess.run([command, "--version"], 
                      capture_output=True, 
                      check=True)
        print_colored(f"✓ {name} is installed", Colors.OKGREEN)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print_colored(f"✗ {name} is not installed", Colors.FAIL)
        return False

def check_dependencies():
    """Check if required dependencies are installed"""
    print_header("Checking Dependencies")
    
    python_ok = check_command("python3", "Python 3")
    node_ok = check_command("node", "Node.js")
    npm_ok = check_command("npm", "npm")
    
    if not (python_ok and node_ok and npm_ok):
        print_colored("\n✗ Missing required dependencies!", Colors.FAIL)
        print("\nPlease install:")
        if not python_ok:
            print("  - Python 3: https://www.python.org/downloads/")
        if not node_ok or not npm_ok:
            print("  - Node.js (includes npm): https://nodejs.org/")
        sys.exit(1)
    
    print_colored("\n✓ All dependencies are installed!", Colors.OKGREEN)

def install_backend_deps():
    """Install Python backend dependencies"""
    print_header("Installing Backend Dependencies")
    
    backend_dir = Path(__file__).parent / "backend"
    requirements_file = backend_dir / "requirements.txt"
    
    if not requirements_file.exists():
        print_colored("✗ requirements.txt not found!", Colors.FAIL)
        return False
    
    try:
        print_colored("Installing Python packages...", Colors.OKCYAN)
        subprocess.run(
            [sys.executable, "-m", "pip", "install", "-r", str(requirements_file)],
            check=True
        )
        print_colored("✓ Backend dependencies installed!", Colors.OKGREEN)
        return True
    except subprocess.CalledProcessError:
        print_colored("✗ Failed to install backend dependencies", Colors.FAIL)
        return False

def install_frontend_deps():
    """Install Node.js frontend dependencies"""
    print_header("Installing Frontend Dependencies")
    
    frontend_dir = Path(__file__).parent / "frontend"
    node_modules = frontend_dir / "node_modules"
    
    if node_modules.exists():
        print_colored("✓ Frontend dependencies already installed (node_modules exists)", Colors.OKGREEN)
        return True
    
    try:
        print_colored("Installing npm packages...", Colors.OKCYAN)
        subprocess.run(
            ["npm", "install"],
            cwd=frontend_dir,
            check=True
        )
        print_colored("✓ Frontend dependencies installed!", Colors.OKGREEN)
        return True
    except subprocess.CalledProcessError:
        print_colored("✗ Failed to install frontend dependencies", Colors.FAIL)
        return False

def start_servers():
    """Start both frontend and backend servers"""
    print_header("Starting Development Servers")
    
    project_root = Path(__file__).parent
    backend_dir = project_root / "backend"
    frontend_dir = project_root / "frontend"
    
    processes = []
    
    try:
        # Start backend server
        print_colored("🚀 Starting Backend (FastAPI) on http://localhost:8000", Colors.OKBLUE)
        backend_process = subprocess.Popen(
            [sys.executable, "-m", "uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"],
            cwd=backend_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1
        )
        processes.append(("Backend", backend_process))
        
        # Give backend a moment to start
        time.sleep(2)
        
        # Start frontend server
        print_colored("🚀 Starting Frontend (Vite) on http://localhost:5173", Colors.OKBLUE)
        frontend_process = subprocess.Popen(
            ["npm", "run", "dev"],
            cwd=frontend_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1
        )
        processes.append(("Frontend", frontend_process))
        
        print_header("Servers Running!")
        print_colored("Frontend: http://localhost:5173", Colors.OKGREEN + Colors.BOLD)
        print_colored("Backend:  http://localhost:8000", Colors.OKGREEN + Colors.BOLD)
        print_colored("API Docs: http://localhost:8000/docs", Colors.OKGREEN + Colors.BOLD)
        print_colored("\nPress Ctrl+C to stop both servers", Colors.WARNING)
        print("="*60 + "\n")
        
        # Monitor processes
        while True:
            for name, process in processes:
                if process.poll() is not None:
                    print_colored(f"\n✗ {name} server stopped unexpectedly!", Colors.FAIL)
                    raise KeyboardInterrupt
            time.sleep(1)
            
    except KeyboardInterrupt:
        print_colored("\n\n🛑 Stopping servers...", Colors.WARNING)
        for name, process in processes:
            try:
                process.terminate()
                process.wait(timeout=5)
                print_colored(f"✓ {name} server stopped", Colors.OKGREEN)
            except subprocess.TimeoutExpired:
                process.kill()
                print_colored(f"✓ {name} server killed", Colors.WARNING)
        print_colored("\n✓ All servers stopped successfully!", Colors.OKGREEN)
        sys.exit(0)

def main():
    """Main entry point"""
    print_colored("""
    ╔═══════════════════════════════════════════════════════╗
    ║         Shanu Sir Classes - Development Runner        ║
    ║              Frontend (Vite) + Backend (FastAPI)      ║
    ╚═══════════════════════════════════════════════════════╝
    """, Colors.HEADER + Colors.BOLD)
    
    # Check dependencies
    check_dependencies()
    
    # Install dependencies if needed
    if not install_backend_deps():
        sys.exit(1)
    
    if not install_frontend_deps():
        sys.exit(1)
    
    # Start servers
    start_servers()

if __name__ == "__main__":
    main()
