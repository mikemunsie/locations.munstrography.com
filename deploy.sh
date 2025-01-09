# Deploy Front end App
npm version patch
git push
git push --tags

# Get package json version
PACKAGE_VERSION=`jq -r .version package.json`

npm run build
echo "{\"version\": \"${PACKAGE_VERSION}\" }" > ./dist/version.json
aws s3 rm s3://locations.munstrography.com --recursive --exclude "locations/*"
aws s3 sync ./dist s3://locations.munstrography.com
aws s3 cp s3://locations.munstrography.com/index.html s3://locations.munstrography.com/index.html --metadata-directive REPLACE --cache-control max-age=0 --content-type "text/html"