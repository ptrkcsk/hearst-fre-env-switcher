.env : .env.example ; cp $< .env

build : FORCE
	npm run build

web-ext-artifacts/build.zip : build
	npx web-ext build --overwrite-dest --source-dir build

web-ext-artifacts/build.zip.xpi : web-ext-artifacts/build.zip
	node -r dotenv/config node_modules/.bin/web-ext sign --source-dir build

src/lib/sites.json : scripts/get-sites.js FORCE
	node -r dotenv/config $<
	npx jest src/lib/sites

src/lib/site-tlds.json : scripts/get-site-tlds.js src/lib/sites.json
	node -r dotenv/config $<

FORCE :
