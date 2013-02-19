var errorCode = require('rest/interceptor/errorCode'),
	client = errorCode();

function exec(options) {
	options.url = "http://localhost:35729";
	client({ path: options.url+'/reload?path='+options.path }).then(
		function(response) {
			//no-op
		},
		function(error) {
			console.log("Error occurred while reloading.");
		}
	);
}

module.exports.exec = exec;