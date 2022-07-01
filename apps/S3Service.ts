var AWS = require('aws-sdk');
let s3bucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
var async = require('async');

export class S3Service {

  async upload(folder: string, fileName: string, data: any, contentType: string = null) {
    var params = {
      Bucket: folder,
      Key: fileName,
      Body: data
    }
    if (contentType) {
      params['ContentType'] = contentType
    }

    return new Promise((resolve, reject) => {
      s3bucket.upload(params, function(err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  signedUrl(folder: string, fileName: string, expiryInMin: number = 10) {
    const EXP = expiryInMin * 60 // 10 Mins
    var params = {
      Bucket: folder,
      Key: fileName,
      Expires: EXP
    }
    return s3bucket.getSignedUrl('getObject', params)
  }

  async delete(folder: string, fileName: string) {
    var params = {
      Bucket: folder,
      Key: fileName
    }
    return new Promise((resolve, reject) => {
      s3bucket.deleteObject(params, function(err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  async copyAndPasteFolder(folder: string, folderOrigin: string, destination: string) {
    const bucketName = folder;        // bucket name
    const oldPrefix = folderOrigin;   // old folder name
    const newPrefix = destination; // new destination folder 
    return new Promise(async (resolve, reject) => {
      try {
        var done = function (err, data) {
          if (err) { 
            console.log('listObjects Error:', err);
          } else { 
            console.log('copyObject completed!');
            resolve(true);
          }
        };
        s3bucket.listObjects({ Bucket: folder, Prefix: oldPrefix }, function (err, data) {
          if (data.Contents.length) {
            async.each(data.Contents, function (file, cb) {
              var params = {
                Bucket: folder,
                CopySource: bucketName + '/' + file.Key,
                Key: file.Key.replace(oldPrefix, newPrefix)
              };
              s3bucket.copyObject(params, function (copyErr, copyData) {
                if (copyErr) {
                  console.log('copyObject Error:', err);
                }
                else {
                  console.log('Copied: ', params.Key);
                  cb();
                }
              });
            }, done);
          }
        });
      } catch (err) {
        console.log('copyAndPasteFolder Error:', err)
        reject(err)
      }
    })
  }
}