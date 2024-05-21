export default (req, res) => {
    const secret = process.env.MY_SECRET_KEY;
    res.status(200).json({ secret });
};