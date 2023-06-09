# @vscode/gulp-vinyl-zip

[![Build Status](https://dev.azure.com/monacotools/Monaco/_apis/build/status%2Fnpm%2Fvscode%2Fgulp-vinyl-zip?branchName=main)](https://dev.azure.com/monacotools/Monaco/_build/latest?definitionId=488&branchName=main)

A library for creating and extracting ZIP archives from/to streams.

Uses [yazl](https://github.com/thejoshwolfe/yazl)
and [yauzl](https://github.com/thejoshwolfe/yauzl).

## Usage

**Archive → Archive**

```javascript
var gulp = require('gulp');
var zip = require('@vscode/gulp-vinyl-zip');

gulp.task('default', function () {
	return zip.src('src.zip')
		.pipe(/* knock yourself out */)
		.pipe(zip.dest('out.zip'));
});
```

or

```javascript
var gulp = require('gulp');
var zip = require('@vscode/gulp-vinyl-zip');

gulp.task('default', function () {
	return gulp.src('src.zip')
		.pipe(zip.src())
		.pipe(/* knock yourself out */)
		.pipe(zip.dest('out.zip'));
});
```

**Archive → File System**

```javascript
var gulp = require('gulp');
var zip = require('@vscode/gulp-vinyl-zip');

gulp.task('default', function () {
	return zip.src('src.zip')
		.pipe(/* knock yourself out */)
		.pipe(gulp.dest('out'));
});
```

**File System → Archive**

```javascript
var gulp = require('gulp');
var zip = require('@vscode/gulp-vinyl-zip');

gulp.task('default', function () {
	return gulp.src('src/**/*')
		.pipe(/* knock yourself out */)
		.pipe(zip.dest('out.zip'));
});
```

**File System → Archive Stream → Disk**

```javascript
var gulp = require('gulp');
var zip = require('@vscode/gulp-vinyl-zip').zip; // zip transform only

gulp.task('default', function () {
	return gulp.src('src/**/*')
		.pipe(/* knock yourself out */)
		.pipe(zip('out.zip'))
		.pipe(/* knock your zip out */)
		.pipe(gulp.dest('./'));
});
```
