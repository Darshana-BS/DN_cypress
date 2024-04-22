from behave import given, when, then
from utils.api_utils import get_exchange_rates
import requests

api_url = 'https://open.er-api.com/v6/latest/USD'
@given('the API endpoint is "{api_url}"')
def set_api_url(context, api_url):
    context.api_url = api_url

@when('I retrieve the exchange rates')
def retrieve_exchange_rates(context):
    context.response = get_exchange_rates(context.api_url)

@then('the response status code should be {status_code}')
def verify_response_status_code(context, status_code):
    assert context.response.status_code == int(status_code)

@then('the response should contain rates for the following currencies:')
def verify_rates_for_currencies(context):
    response_data = context.response.json()
    currencies = [row['currency_code'] for row in context.table]

    for currency in currencies:
        assert currency in response_data['rates']
