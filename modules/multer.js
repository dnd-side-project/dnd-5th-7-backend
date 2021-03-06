const { s3, s3bucket } = require('../config/s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

const upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: s3bucket,
		acl: 'public-read',
		key: function (req, file, cb) {
			cb(null, Date.now() + '.' + file.originalname.split('.').pop());
		}
	})
});

module.exports = upload;