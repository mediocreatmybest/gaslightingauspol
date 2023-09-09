import argparse
import json

from datasets import load_dataset

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--output-json', default='data.json', type=str, required=False)
    args = parser.parse_args()


# Load the dataset from Hugging Face
dataset = load_dataset("Mediocreatmybest/example_quotes")

# Convert the default train dataset to pandas dataframe then to a dictionary
data_list = dataset['train'].to_pandas().to_dict(orient='records')

# Convert fields that have multiple items separated with |
for item in data_list:
    item['URL'] = item['URL'].split('|')
    item['Source_type'] = item['Source_type'].split('|')
    item['Tags'] = item['Tags'].split('|')

# Add this as content within the json, same as our original json examples
output_data = {"content": data_list}

# Dump json data at utf-8 and keep raw utf-8 characters
with open(args.output_json, 'w', encoding='utf-8') as json_file:
    json.dump(output_data, json_file, indent=4, ensure_ascii=False)

print("Job done!")
