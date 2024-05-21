// api/secret.js
export default (req, res) => {
    const allowedOrigin = 'https://musabshifu.github.io'; // Replace with your GitHub Pages URL
    const requestOrigin = req.headers.origin;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Check the origin of the incoming request
    if (requestOrigin !== allowedOrigin) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    // If the origin is allowed, fetch and return the secret
    const secret = process.env.M_API;
    res.status(200).json({ secret });
};
