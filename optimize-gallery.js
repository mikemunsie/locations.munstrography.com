import fs from "fs";
import path from "path";
import sharp from "sharp";

async function resize_images(dir, max_height = 1080) {
  const walk = async (directory) => {
    const files = await fs.promises.readdir(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isFile()) {
        try {
          const meta_data = await sharp(filePath).metadata();
          if (meta_data.height > max_height) {
            await sharp(filePath)
              .resize(null, max_height)
              .toBuffer(function (err, buffer) {
                fs.writeFileSync(filePath, buffer);
              });
          }
        } catch (e) {
          // Do nothing
        }
      } else if (stats.isDirectory()) {
        await walk(filePath);
      }
    }
  };
  await walk(dir, 1080);
}

resize_images("public/locations", 1080);
