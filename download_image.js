const https = require("https");
const fs = require("fs");
const path = require("path");

// High-quality cupping therapy image from Unsplash with direct stable URL
const imageUrl =
  "https://images.unsplash.com/photo-1608748688341-c1d55a42c626?auto=format&fit=crop&w=1600&h=900&q=80";
const outputPath = path.join(__dirname, "public", "cupping-therapy-hero.jpg");

console.log("Downloading cupping therapy image...");

https
  .get(imageUrl, (response) => {
    if (response.statusCode === 200) {
      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✅ Image downloaded successfully to: ${outputPath}`);
        console.log(
          "The image is now ready to be used as the hero background.",
        );
      });

      fileStream.on("error", (err) => {
        fs.unlink(outputPath, () => {});
        console.error("Error writing file:", err);
        process.exit(1);
      });
    } else {
      console.error(
        `Failed to download image. Status code: ${response.statusCode}`,
      );
      process.exit(1);
    }
  })
  .on("error", (err) => {
    console.error("Download error:", err);
    process.exit(1);
  });
