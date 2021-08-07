const { google } =  require('googleapis');
const { Readable } = require('stream');
const path = require('path');
import api_keys from '../../../utils/google_api_keys';

const oauth2Client = new google.auth.OAuth2(
    api_keys.CLIENT_ID,
    api_keys.CLIENT_SECRET,
    api_keys.REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: api_keys.REFRESH_TOKEN});

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
            sizeLimit: "100mb"
        }
    }
}