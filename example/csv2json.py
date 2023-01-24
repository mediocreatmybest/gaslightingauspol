import csv
import json

# Open the CSV file and read its contents
with open('example.csv', 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    rows = list(reader)

# Write the JSON file
with open('data.json', 'w') as jsonfile:
    json.dump(rows, jsonfile)