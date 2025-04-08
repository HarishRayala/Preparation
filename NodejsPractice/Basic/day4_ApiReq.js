const http = require("http");
const axios = require("axios");

const server = http.createServer(async (req, res) => {
  try {
    res.writeHead(200, { "content-type": "text/html" });
    const data = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);

    const productsMapping = `<div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;">${data
      .map((el, id) => {
        return `<div style="text-align:center;width:150px;border:0.5px solid black;border-radius:5px;padding:8px" >
                <div><img src=${el.image} alt="image" style="width:100px;height:100px"/></div>
                <diV>${el.title}</div>
                <div>${el.price}</div>
            </div>`;
      })
      .join("")}</div>`;

    if (req.url === "/") {
      res.write(
        `<div>
          <h1 style="text-align:center">Welcome to Home Page</h1>
          </div>
          <div style="text-align:center">
            <a style="text-decoration:none;background:blue;color:white;padding:8px;border-radius:5px" href="/products">
            Products Page
            </a>
          </div>
        `
      );
    } else if (req.url === "/products") {
      res.write(`
        <div style="text-align:center">
          <a style="text-decoration:none;background:blue;color:white;padding:8px;border-radius:5px" href="/">
            Back to Home Page
            </a>
          </div>
          <div style="margin-Top:20px">
        ${productsMapping}
        </div>`);
    }

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Call</title>
        </head>
        <body>
            
        </body>
        </html>
    `);
  } catch (error) {
    res.writeHead(500, { "content-type": "text/html" });
    res.end(`<h1>Couldn't fetch data</h1>`);
  }
});

server.listen(8080);
