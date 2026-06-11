const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const uploadDir = path.join(root, "references", "uploads");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 15 * 1024 * 1024) {
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        const payload = JSON.parse(body);
        const match = /^data:(image\/(?:png|jpeg|webp));base64,(.+)$/.exec(payload.dataUrl || "");

        if (!match) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "画像形式は PNG / JPEG / WebP にしてください。" }));
          return;
        }

        fs.mkdirSync(uploadDir, { recursive: true });
        const extension = match[1] === "image/jpeg" ? "jpg" : match[1].split("/")[1];
        const safeBase = String(payload.name || "trend")
          .replace(/\.[^.]+$/, "")
          .replace(/[^a-zA-Z0-9_-]+/g, "-")
          .slice(0, 40) || "trend";
        const fileName = `${Date.now()}-${safeBase}.${extension}`;
        const filePath = path.join(uploadDir, fileName);

        fs.writeFileSync(filePath, Buffer.from(match[2], "base64"));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ file: `references/uploads/${fileName}` }));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "アップロードに失敗しました。" }));
      }
    });
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(root, decodeURIComponent(requestedPath)));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`クリエイター診断ファクトリーを起動しました: http://localhost:${port}`);
});
