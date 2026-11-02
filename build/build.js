// src/index.html 에 vendor/xlsx.mini.min.js 를 넣어 파일 하나짜리 index.html 을 만듭니다.
// 사용: node build/build.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "src/index.html"), "utf8");
const lib = fs.readFileSync(path.join(root, "vendor/xlsx.mini.min.js"), "utf8").replace(/<\/script/gi, "<\\/script");
if (!src.includes("/*__XLSX__*/")) throw new Error("placeholder missing");
const out = src.replace("/*__XLSX__*/", () => lib);
fs.writeFileSync(path.join(root, "index.html"), out);
console.log("index.html", (out.length / 1024).toFixed(0) + "KB");
