"""
start_claw.py - Start the claw agent.
Run with: python start_claw.py
"""
import subprocess
import os

env = os.environ.copy()
env["OPENAI_API_KEY"] = "local"
env["OPENAI_BASE_URL"] = "http://localhost:8000/v1"

subprocess.run(
    [r"C:\Users\trivi\Documents\Github_Projects\claw-code\rust\target\debug\claw.exe", "--model", "qwen2.5:7b"],
    env=env
)
