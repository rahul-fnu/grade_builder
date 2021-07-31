const { google } =  require('googleapis');
const { Readable } = require('stream');
const path = require('path');

const CLIENT_ID = '186327952112-p69c4tfjvpcdoakfbg5frhvs249p2v4d.apps.googleusercontent.com'
const CLIENT_SECRET = 'nBsbtgcUX2f0pG4l_Xcp4M5X'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'

const REFRESH_TOKEN = '1//04GCubtQCZCqsCgYIARAAGAQSNwF-L9Ir3YaAY0p7qcuueQCZv5MaykIoUF2PZ1zt-IjElzwPkzpE8CwMeT6UY_CPtUJtHIonWck'

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version:'v3',
    auth: oauth2Client
})

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'POST':
            try {
                const fileName = req.body.name;
                const file = req.body.file.split(/,(.+)/)[1];

                const buf = new Buffer.from(file, "base64");
                const bs = new Readable.PassThrough();
                bs.end(buf);

                const response = await drive.files.create({
                    requestBody: {
                        name: file.name,
                        mimeType: "image/png"
                    },
                    media: {
                        mimeType: "image/png",
                        body: bs
                    }
                })
                const fileId = response.data.id
                await drive.permissions.create({
                    fileId: fileId,
                    requestBody: {
                        role: 'reader',
                        type: 'anyone'
                    }
                })
                const result = await drive.files.get({
                    fileId: fileId,
                    fields: 'webViewLink, webContentLink'
                })
                res.status(200).json({success: true, data: result.data});
            } catch (error) {
                console.log(error)
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "10mb"
        }
    }
}