const QRcode = require("qrcode")

const QrGenerate = async text => {

    try {

        const qr = await QRcode.toString(text, { type: 'terminal' })
        console.log(qr)
    } catch (err) {
        console.log(err)
    }
};
QrGenerate("mongodb")