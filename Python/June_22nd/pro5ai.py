import requests

# Define the mock API endpoint
API_URL = "https://jsonplaceholder.typicode.com/users"

def fetch_customer_data(api_url):
    """
    Fetch customer data from the given API endpoint.
    
    :param api_url: str - The URL of the mock API.
    :return: list - List of customer data.
    """
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching data from API: {e}")
        return []

def calculate_average_age(customers):
    """
    Calculate the average age of the customers.
    
    :param customers: list - List of customer dictionaries.
    :return: float - The average age of the customers.
    """
    if not customers:
        return 0.0

    total_age = 0
    count = 0

    for customer in customers:
        if 'age' in customer:
            total_age += customer['age']
            count += 1

    if count == 0:
        return 0.0

    return total_age / count

def main():
    # Fetch the customer data
    customers = fetch_customer_data(API_URL)

    # Calculate the average age
    average_age = calculate_average_age(customers)

    # Print the average age
    print(f"The average age of customers is {average_age:.1f}")

if __name__ == "__main__":
    main()
