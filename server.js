const http = require("http");
const fs = require("fs");

http
	.createServer(function(req, res) {
		const { resData, type } = route(req);
		res.writeHead(200, { "Content-Type": type });
		res.write(resData);
		res.end();
	})
	.listen(8080);

function route(req) {
	let resData, type;

	switch (req.url) {
		case "/":
			resData = fs.readFileSync("public/index.html");
			type = "text/html";
			break;

		case "/index.css":
			resData = fs.readFileSync("public/index.css");
			type = "text/css";
			break;

		case "/js/index.js":
			resData = fs.readFileSync("public/js/index.js");
			type = "text/javascript";
			break;

		case "/js/logMessage.js":
			resData = fs.readFileSync("public/js/logMessage.js");
			type = "text/javascript";
			break;

		case "/contact":
			resData = fs.readFileSync("public/contact.html");
			type = "text/html";
			break;

		case "/js/contact.js":
			resData = fs.readFileSync("public/js/contact.js");
			type = "text/javascript";
			break;

		case "/public/res/animations/face.json":
			resData = fs.readFileSync("public/res/animations/face.json");
			type = "text";
			break;

		case "/public/res/animations/skills.json":
			resData = fs.readFileSync("public/res/animations/skills.json");
			type = "text";
			break;

		case "/public/res/animations/work.json":
			resData = fs.readFileSync("public/res/animations/work.json");
			type = "text";
			break;

		case "/public/static/fonts/noto-sans-jp-v23-latin-regular.woff2":
			resData = fs.readFileSync(
				"public/static/fonts/noto-sans-jp-v23-latin-regular.woff2"
			);
			type = "font";
			break;

		case "/public/static/fonts/noto-sans-jp-v23-latin-regular.woff":
			resData = fs.readFileSync(
				"public/static/fonts/noto-sans-jp-v23-latin-regular.woff"
			);
			type = "font";
			break;

		case "/public/static/fonts/noto-sans-jp-v23-latin-500.woff2":
			resData = fs.readFileSync(
				"public/static/fonts/noto-sans-jp-v23-latin-500.woff2"
			);
			type = "font";
			break;

		case "/public/static/fonts/noto-sans-jp-v23-latin-500.woff":
			resData = fs.readFileSync(
				"public/static/fonts/noto-sans-jp-v23-latin-500.woff"
			);
			type = "font";
			break;

		case "/public/static/fonts/noto-sans-jp-v23-latin-700.woff2":
			resData = fs.readFileSync(
				"public/static/fonts/noto-sans-jp-v23-latin-700.woff2"
			);
			type = "font";
			break;

		case "/public/static/fonts/noto-sans-jp-v23-latin-700.woff":
			resData = fs.readFileSync(
				"public/static/fonts/noto-sans-jp-v23-latin-700.woff"
			);
			type = "font";
			break;

		case "/public/static/Circle.svg":
			resData = fs.readFileSync("public/static/Circle.svg");
			type = "image/svg+xml";
			break;

		case "/public/static/Highlighter.svg":
			resData = fs.readFileSync("public/static/Highlighter.svg");
			type = "image/svg+xml";
			break;

		case "/public/static/favicon.png":
			resData = fs.readFileSync("public/static/favicon.png");
			type = "image/png";
			break;

		default:
			resData = "";
			type = "text/plain";
			break;
	}
	return { resData, type };
}
