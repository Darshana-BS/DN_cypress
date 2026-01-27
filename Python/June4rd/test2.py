# backup

import subprocess
import os
from datetime import datetime

# Configuration
SOURCE_DIR = '/Users/darshana/Documents/DN_cypress/Python/June4rd/SOURCE_DIR/'
REMOTE_USER = 'remote_username'
REMOTE_HOST = 'remote_host'
REMOTE_DIR = '/Users/darshana/Documents/DN_cypress/Python/June4rd/REMOTE_DIR/'
LOG_FILE = 'backup_log.txt'

def backup_directory(source_dir, remote_user, remote_host, remote_dir):
    # Construct the rsync command
    rsync_command = [
        'rsync',
        '-avz',  # Options: archive mode, verbose, compress file data during transfer
        source_dir,
        f'{remote_user}@{remote_host}:{remote_dir}'
    ]

    try:
        # Execute the rsync command
        result = subprocess.run(rsync_command, capture_output=True, text=True)

        # Check the result
        if result.returncode == 0:
            log_message = f"{datetime.now()}: Backup successful.\n"
            print("Backup successful.")
        else:
            log_message = f"{datetime.now()}: Backup failed. Error: {result.stderr}\n"
            print("Backup failed. Check the log file for details.")
        
        # Write the log
        with open(LOG_FILE, 'a') as log_file:
            log_file.write(log_message)

    except Exception as e:
        log_message = f"{datetime.now()}: Backup failed. Exception: {str(e)}\n"
        print("Backup failed. Check the log file for details.")
        with open(LOG_FILE, 'a') as log_file:
            log_file.write(log_message)

def main():
    # Ensure source directory exists
    if not os.path.exists(SOURCE_DIR):
        print(f"Source directory {SOURCE_DIR} does not exist.")
        return
    
    # Perform the backup
    backup_directory(SOURCE_DIR, REMOTE_USER, REMOTE_HOST, REMOTE_DIR)

if __name__ == "__main__":
    main()