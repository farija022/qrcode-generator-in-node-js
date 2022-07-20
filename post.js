const qr = require("qrcode")
const express = require("express")

const app = express()

app.use(express.json())



app.post("/scan", async (req, res) => {

    try {
        const url = req.body.url;
        const QRcode = await qr.toString(url, { type: 'terminal' })
        console.log(QRcode)
        res.send("QRcode generated")
    } catch (err) {
        console.log(err)
    }
});

app.listen(8080, () => {

    console.log("Server is On ")
})