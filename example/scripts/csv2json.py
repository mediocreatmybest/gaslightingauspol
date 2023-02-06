import argparse
import csv
import json

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--input-csv', type=str, required=True)
    parser.add_argument('--output-json', default='data.json', type=str, required=False)
    args = parser.parse_args()

# Open the CSV file and read its contents
with open(args.input_csv, 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    rows = list(reader)

# Write the JSON file
with open(args.output_json, 'w') as jsonfile:
    json.dump(rows, jsonfile)


