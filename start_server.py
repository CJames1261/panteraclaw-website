"""
start_server.py - Start the local Qwen inference server.
Run with: python start_server.py
"""
import subprocess
import sys

subprocess.run(
    [sys.executable, "-m", "uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"],
    cwd=r"C:\Users\trivi\Documents\Github_Projects\claw-code\local_qwen_server"
)
