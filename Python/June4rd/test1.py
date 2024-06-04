# health check

import psutil
import logging
from datetime import datetime

# Setup logging
logging.basicConfig(filename='system_health.log', level=logging.INFO)

# Thresholds
CPU_THRESHOLD = 80.0  # in percent
MEMORY_THRESHOLD = 80.0  # in percent
DISK_THRESHOLD = 80.0  # in percent
PROCESS_THRESHOLD = 150  # number of processes

def check_cpu_usage():
    usage = psutil.cpu_percent(interval=1)
    if usage > CPU_THRESHOLD:
        logging.warning(f"{datetime.now()}: High CPU usage detected: {usage}%")
    return usage

def check_memory_usage():
    memory = psutil.virtual_memory()
    usage = memory.percent
    if usage > MEMORY_THRESHOLD:
        logging.warning(f"{datetime.now()}: High Memory usage detected: {usage}%")
    return usage

def check_disk_usage():
    disk = psutil.disk_usage('/')
    usage = disk.percent
    if usage > DISK_THRESHOLD:
        logging.warning(f"{datetime.now()}: High Disk usage detected: {usage}%")
    return usage

def check_process_count():
    process_count = len(psutil.pids())
    if process_count > PROCESS_THRESHOLD:
        logging.warning(f"{datetime.now()}: High Process count detected: {process_count}")
    return process_count

def monitor_system():
    cpu_usage = check_cpu_usage()
    memory_usage = check_memory_usage()
    disk_usage = check_disk_usage()
    process_count = check_process_count()
    
    print(f"CPU Usage: {cpu_usage}%")
    print(f"Memory Usage: {memory_usage}%")
    print(f"Disk Usage: {disk_usage}%")
    print(f"Process Count: {process_count}")

if __name__ == "__main__":
    monitor_system()