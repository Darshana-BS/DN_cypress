# status of the url

import urllib.request
import time
url = 'https://www.google.com/'
def check_application_health(url):
    try:
        response = urllib.request.urlopen(url)
        if response.getcode() == 200:
            return "UP"
        else:
            return "DOWN"
    except Exception as e:
        return "DOWN"
def main():
    while True:
        status = check_application_health(url)
        print(f"Application Status: {status}")
        # Wait for 60 seconds before checking again
        time.sleep(1)
if __name__ == "__main__":
    main()