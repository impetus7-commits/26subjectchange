// src/index.html 에 vendor/xlsx.mini.min.js 를 넣어 파일 하나짜리 페이지를 만듭니다.
// 사용: node build/build.js
//  - index.html                       : 저장소용(항상 같은 이름)
//  - dist/수강변경검토(YYMMDDHHmm).html : 배포용(한국 시각 날짜·시간을 괄호 안에)
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "src/index.html"), "utf8");
const lib = fs.readFileSync(path.join(root, "vendor/xlsx.mini.min.js"), "utf8").replace(/<\/script/gi, "<\\/script");
if (!src.includes("/*__XLSX__*/")) throw new Error("placeholder missing");
const out = src.replace("/*__XLSX__*/", () => lib);
fs.writeFileSync(path.join(root, "index.html"), out);

const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Seoul", year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
}).formatToParts(new Date()).map(x => [x.type, x.value]));
const stamp = `${p.year}${p.month}${p.day}${p.hour}${p.minute}`;
const dist = path.join(root, "dist");
fs.mkdirSync(dist, { recursive: true });
const name = `수강변경검토(${stamp}).html`;
fs.writeFileSync(path.join(dist, name), out);
console.log("index.html", (out.length / 1024).toFixed(0) + "KB");
console.log("dist/" + name);
