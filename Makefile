.env : .env.example ; cp $< .env

build : node_modules FORCE
	# Disable INLINE_RUNTIME_CHUNK for CSP compatibility.
	# See https://stackoverflow.com/a/55257634/4411309
	INLINE_RUNTIME_CHUNK=false npm run build

node_modules : ; yarn install

safari : build
	# https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari
	xcrun safari-web-extension-converter \
		--app-name 'Hearst FRE Environment Switcher' \
		--bundle-identifier 'com.patrikcsak.hearst-fre-env-switcher' \
		--force \
		--project-location safari \
		--swift  \
		build

src/lib/sites.json : scripts/get-sites.js FORCE
	node -r dotenv/config $<
	npx jest src/lib/sites

src/lib/site-tlds.json : scripts/get-site-tlds.js src/lib/sites.json
	node -r dotenv/config $<

web-ext-artifacts/build.zip : build
	npx web-ext build --overwrite-dest --source-dir build

web-ext-artifacts/build.zip.xpi : web-ext-artifacts/build.zip
	node -r dotenv/config node_modules/.bin/web-ext sign --source-dir build

FORCE :
