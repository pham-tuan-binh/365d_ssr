#!/bin/bash

# Create the "images" directory if it doesn't exist
mkdir -p images

# Read the CSV file
csv_file="combined_image_links.csv"

# Process each line in the CSV file
while IFS=, read -r index link; do
    # Remove leading/trailing spaces from index and link
    index=$(echo "$index" | tr -d '[:space:]')
    link=$(echo "$link" | tr -d '[:space:]')

    # Download the file
    filename="images/$index.jpg"
    curl -s "$link" -o "$filename"
    echo "Downloaded: $filename"
done < "$csv_file"
