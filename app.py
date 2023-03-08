import random

# Define the case items and their probabilities of being dropped
case_items = [
    {"name": "Item 1", "price": 10, "probability": 0.1},
    {"name": "Item 2", "price": 20, "probability": 0.05},
    {"name": "Item 3", "price": 0, "probability": 0.85},
    # Add more items and their probabilities here
]

# Check that the probabilities add up to 1
tolerance = 1e-6
total_probability = sum(item["probability"] for item in case_items)
if abs(total_probability - 1) > tolerance:
    print("Error: Probabilities do not add up to 1!")
else:
    print("Probabilities add up to 1!")

# Define the cost of opening the case
case_cost = 5

# Define the number of times to simulate the case opening
num_simulations = 100

# Define variables to keep track of the results
total_winnings = 0
total_cost = 0
total_profit = 0

# Define a function to simulate opening the case


def simulate_case_opening():
    # Calculate the total probability of all items
    total_probability = sum(item["probability"] for item in case_items)

    # Choose a random number between 0 and the total probability
    rand_num = random.uniform(0, total_probability)

    # Loop through the items and subtract their probabilities from the random number until it reaches 0
    for item in case_items:
        rand_num -= item["probability"]
        if rand_num <= 0:
            # The current item is the one that was dropped
            return item


# Simulate opening the case multiple times and keep track of the results
for i in range(num_simulations):
    # Open the case
    dropped_item = simulate_case_opening()

    # Calculate the cost and profit
    cost = case_cost
    profit = cost - dropped_item["price"]

    # Add to the total cost, profit, and winnings
    total_cost += cost
    total_profit += profit
    total_winnings += cost - profit

# Print the results
print(f"Total revenue: ${total_cost}")
print(f"Total cost: ${total_cost}")
print(f"Total profit: ${total_profit}")
print(f"Total winnings: ${total_winnings}")
print(f"Profit margin: {total_profit / total_cost:.2%}")
