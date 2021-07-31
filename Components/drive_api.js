const { google } =  require('googleapis');
const path = require('path');
const fs = require('fs');

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

export async function uploadFile(file_path, name) {
    const response = await drive.files.create({
        requestBody: {
            name: name,
            mimeType: "image/png"
        },
        media: {
            mimeType: "image/png",
            body: fs.createReadStream(file_path)
        }
    })
    return response.data
}