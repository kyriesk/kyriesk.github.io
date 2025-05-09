// Simple deployment script for GitHub Pages
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Run the build
console.log("Building the project...");
execSync("npm run build", { stdio: "inherit" });

// Create necessary files in the dist folder
console.log("Creating special files for GitHub Pages...");

// Create .nojekyll file
fs.writeFileSync(path.join("dist", ".nojekyll"), "");

// Ensure dist directory exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

// Copy 404.html to dist if it exists in public
if (fs.existsSync(path.join("public", "404.html"))) {
  fs.copyFileSync(
    path.join("public", "404.html"),
    path.join("dist", "404.html")
  );
}

// Deploy to gh-pages branch
console.log("Deploying to GitHub Pages...");
execSync("npx gh-pages -d dist", { stdio: "inherit" });

console.log("Deployment complete!");
