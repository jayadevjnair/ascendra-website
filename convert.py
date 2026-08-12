import os
from PIL import Image

public_dir = 'public'
for filename in os.listdir(public_dir):
    if filename.endswith('.png'):
        filepath = os.path.join(public_dir, filename)
        webp_path = os.path.join(public_dir, filename.rsplit('.', 1)[0] + '.webp')
        print(f"Converting {filepath} to {webp_path}")
        try:
            with Image.open(filepath) as img:
                img.save(webp_path, 'WEBP', quality=85)
            # os.remove(filepath) # Wait, let's keep them until we are sure
        except Exception as e:
            print(f"Error converting {filepath}: {e}")
