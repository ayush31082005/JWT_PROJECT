const jwt = require("jsonwebtoken")
require("dotenv").config()



module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return res.json({ message: "token not found" })
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decode
        next()
    }
    catch (error) {
        res.json({ message: "invailed token" })
    }
}