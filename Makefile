.env : .env.example ; cp $< .env

src/lib/sites.json : scripts/get-sites.js FORCE
	node -r dotenv/config $<

src/lib/site-tlds.json : scripts/get-site-tlds.js src/lib/sites.json
	node -r dotenv/config $<

FORCE :
