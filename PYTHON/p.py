from PIL import Image
import os


def convert_jpg_to_webp(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Loop through all files in the input folder
    for filename in os.listdir(input_folder):
        # if filename.endswith(".jpg"):
        if filename.endswith((".jpg", ".jpeg", ".png")):
            # Open the JPG image
            jpg_image = Image.open
            (os.path.join(input_folder, filename))

            # Create the output file path with a .webp extension
            webp_filename = os.path.splitext(filename)[0] + ".webp"
            webp_filepath = os.path.join(output_folder, webp_filename)

            # Convert and save as WebP
            jpg_image.save(webp_filepath, "WEBP")


if __name__ == "__main__":
    # Replace with the path to your JPG images
    input_folder = "All_Images/IMGS/"
    # Replace with the desired output folder
    output_folder = "downloaded_images_webp"

    convert_jpg_to_webp(input_folder, output_folder)
    print("Conversion complete.")
