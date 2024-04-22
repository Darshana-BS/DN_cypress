Feature: Exchange Rates API Test

  Scenario: Verify USD rates against multiple currencies
    Given the API endpoint is "https://open.er-api.com/v6/latest/USD"
    When I retrieve the exchange rates
    Then the response status code should be 200
    And the response should contain rates for the following currencies:
      | currency_code |
      | EUR           |
      | GBP           |
      | JPY           |
