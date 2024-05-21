// api/secret.js
export default (req, res) => {
    // Check the origin of the incoming request
    const allowedOrigin = 'https://MusabShifu.github.io'; // Replace with your GitHub Pages URL
    const requestOrigin = req.headers.origin;

    if (requestOrigin !== allowedOrigin) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    // If the origin is allowed, fetch and return the secret
    const secret = process.env.M_API;
    res.status(200).json({ secret });
};
