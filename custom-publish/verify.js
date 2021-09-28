const fs = require('fs');
const path = require('path');
const { NPM_TOKEN } = process.env;

if (!NPM_TOKEN) {
    console.error('No NPM_TOKEN provided')
    process.exit(1);
}

fs.writeFileSync(path.resolve('.npmrc'), `@getsystems:registry=https://www.myget.org/F/nifdex/npm/\n//www.myget.org/F/nifdex/npm/:_authToken=${NPM_TOKEN}\nstrict-ssl=true`);
