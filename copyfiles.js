const fs = require("fs");
const path = require("path");

function copyFilesWithExtensions(sourceDir, targetDir, extensions) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error("Error reading the source directory:", err);
      return;
    }

    const filteredFiles = files.filter((file) =>
      extensions.includes(path.extname(file))
    );

    filteredFiles.forEach((file) => {
      const sourceFilePath = path.join(sourceDir, file);
      const targetFilePath = path.join(targetDir, file);

      fs.copyFile(sourceFilePath, targetFilePath, (err) => {
        if (err) {
          console.error(`Error copying file ${file}:`, err);
        } else {
          console.log(`File ${file} copied successfully to ${targetDir}`);
        }
      });
    });
  });
}

const sourceDirPath = process.argv[2];
const targetDirPath = process.argv[3];

if (!sourceDirPath || !targetDirPath) {
  console.error("Please provide the source and target directory paths.");
  process.exit(1);
}

const extensionsToFilter = [".txt", ".jpg"];

copyFilesWithExtensions(sourceDirPath, targetDirPath, extensionsToFilter);
