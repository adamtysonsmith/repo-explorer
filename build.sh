rm -rf dist/
mkdir dist
cp src/index.html dist/
webpack --config webpack.config.js -p