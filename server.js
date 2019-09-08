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

		case "/index.js":
			resData = fs.readFileSync("public/js/index.js");
			type = "text/javascript";
			break;

		case "/contact":
			resData = fs.readFileSync("public/contact.html");
			type = "text/html";
			break;

		case "/contact.js":
			resData = fs.readFileSync("public/js/contact.js");
			type = "text/javascript";
			break;

		case "/res/animations/face.json":
			resData = fs.readFileSync("res/animations/face.json");
			type = "text";
			break;

		case "/res/animations/skills.json":
			resData = fs.readFileSync("res/animations/skills.json");
			type = "text";
			break;

		case "/static/fonts/noto-sans-jp-v23-latin-regular.woff2":
			resData = fs.readFileSync(
				"static/fonts/noto-sans-jp-v23-latin-regular.woff2"
			);
			type = "font";
			break;

		case "/static/fonts/noto-sans-jp-v23-latin-regular.woff":
			resData = fs.readFileSync(
				"static/fonts/noto-sans-jp-v23-latin-regular.woff"
			);
			type = "font";
			break;

		case "/static/fonts/noto-sans-jp-v23-latin-500.woff2":
			resData = fs.readFileSync(
				"static/fonts/noto-sans-jp-v23-latin-500.woff2"
			);
			type = "font";
			break;

		case "/static/fonts/noto-sans-jp-v23-latin-500.woff":
			resData = fs.readFileSync("static/fonts/noto-sans-jp-v23-latin-500.woff");
			type = "font";
			break;

		case "/static/fonts/noto-sans-jp-v23-latin-700.woff2":
			resData = fs.readFileSync(
				"static/fonts/noto-sans-jp-v23-latin-700.woff2"
			);
			type = "font";
			break;

		case "/static/fonts/noto-sans-jp-v23-latin-700.woff":
			resData = fs.readFileSync("static/fonts/noto-sans-jp-v23-latin-700.woff");
			type = "font";
			break;

		case "/static/Circle.svg":
			resData = fs.readFileSync("static/Circle.svg");
			type = "image/svg+xml";
			break;

		case "/static/Highlighter.svg":
			resData = fs.readFileSync("static/Highlighter.svg");
			type = "image/svg+xml";
			break;

		case "/static/favicon.png":
			resData = fs.readFileSync("static/favicon.png");
			type = "image/png";
			break;

		default:
			resData = "";
			type = "text/plain";
			break;
	}
	return { resData, type };
}
