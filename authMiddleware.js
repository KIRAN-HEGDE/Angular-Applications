const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

const mappings = {
    get: ["/api/orders", "/orders"],
    post: ["/api/products", "/products", "/api/categories", "/categories"]
}

function requiresAuth(method, url) {
    return (mappings[method.toLowerCase()] || [])
        .find(p => url.startsWith(p)) !== undefined;
}