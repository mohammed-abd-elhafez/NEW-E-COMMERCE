import os
import time
from bs4 import BeautifulSoup
import requests


def download_images(url, output_folder):
    # Send an HTTP GET request to the URL with SSL certificate validation disabled
    getURL = requests.get(
        url, headers={"User-Agent": "Mozilla/5.0"}, verify=False)

    # Check if the request was successful
    if getURL.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(getURL.text, 'html.parser')

        # Find all image tags in the HTML
        images = soup.find_all('img')

        # Create the output folder if it doesn't exist
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)

        # Download each valid image to the output folder
        for index, image in enumerate(images):
            img_url = image.get('src')
            if img_url and img_url.startswith(('http:', 'https:')):
                img_path = os.path.join(output_folder, f'image_{index}.jpg')
                webs = requests.get(img_url, verify=False)
                if webs.status_code == 200:
                    with open(img_path, 'wb') as f:
                        f.write(webs.content)
                    print(f"Downloaded: {img_path}")
                else:
                    print(f"Failed to download: {img_url}")

        print("All images downloaded successfully!")
    else:
        print(f"Failed to fetch the page. Status code: {getURL.status_code}")


if __name__ == "__main__":
    # Input the URL of the website you want to download images froma
    website_url = input("Enter the website URL: ")

    # Define the output folder where images will be saved
    output_folder = "downloaded_images"

    # Call the download_images function
    download_images(website_url, output_folder)




