const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, './src/environments/environment.ts');
const envDirectory = path.dirname(targetPath);

if (!fs.existsSync(envDirectory)) {
  fs.mkdirSync(envDirectory, { recursive: true });
}

const envConfigFile = `export const environment = {
  production: true,
  token: '${process.env.REST_COUNTRIES_TOKEN || ''}',
};
`;

fs.writeFileSync(targetPath, envConfigFile);
console.log(`Output generated at ${targetPath}`);
