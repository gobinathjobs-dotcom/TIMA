import sys
import os

try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def crop_image(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"Error: Could not find {input_path}")
        sys.exit(1)
        
    img = Image.open(input_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        width = bbox[2] - bbox[0]
        height = bbox[3] - bbox[1]
        
        # Favicons look best when square, otherwise they get squished
        max_dim = max(width, height)
        square_img = Image.new('RGBA', (max_dim, max_dim), (0, 0, 0, 0))
        
        offset = ((max_dim - width) // 2, (max_dim - height) // 2)
        square_img.paste(img_cropped, offset)
        
        square_img.save(output_path, "PNG")
        print(f"Successfully cropped to square: {max_dim}x{max_dim}")
    else:
        print("Could not find bounding box (image is entirely empty).")

if __name__ == "__main__":
    crop_image(r"public\Logo.png", r"public\favicon-cropped.png")
