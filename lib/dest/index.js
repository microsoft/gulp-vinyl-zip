'use strict';

var through = require('through2');
var vfs = require('vinyl-fs');
var zip = require('../zip');
var path = require('path');

function dest(zipPath, opts) {
	var input = zip(path.basename(zipPath), opts);
	var output = vfs.dest(path.dirname(zipPath), { ...opts, encoding: false });

	var stream = through.obj(function (file, enc, cb) {
		input.write(file);
		cb();
	}, function (cb) {
		input.end();
		output.on('end', function () {
			stream.end();
			cb();
		});
	});

	input.pipe(output);
	output.on('data', function (data) {
		stream.push(data);
	});

	stream.resume();
	return stream;
}

module.exports = dest;
