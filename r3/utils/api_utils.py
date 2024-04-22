import requests

api_url = 'https://open.er-api.com/v6/latest/USD'
def get_exchange_rates(api_url):
    response = requests.get(api_url)
    # return response
    print(response.json())
