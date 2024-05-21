export default (req, res) => {
    const secret = process.env.M_API;
    res.status(200).json({ secret });
};