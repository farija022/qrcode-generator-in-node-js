const QRcode = require("qrcode")

const QrGenerate = async text => {

    try {

        const qr = await QRcode.toFile(`./qrcodeimages/${new Date()}.png`, text)
        console.log(qr)
    } catch (err) {
        console.log(err)
    }
};
QrGenerate("mongodb")