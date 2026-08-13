// Easy local deploy: npm run build && npm run deploy
// Reads credentials from ./deploy.env (gitignored). No secrets in this file.
// NOTE: the FTP root "/" for this account IS the live docroot (verified 2026-08-13).
//       Dotfiles (.htaccess) need an explicit upload — uploadDir skips them.
import * as ftp from 'basic-ftp';
import * as fs from 'fs';
import * as path from 'path';

// --- load deploy.env ---
const envPath = path.join(import.meta.dirname, 'deploy.env');
const env = {};
for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
}

const FTP_CONFIG = {
  host: env.FTP_HOST || '145.79.28.231',
  user: env.FTP_USER,
  password: env.FTP_PASS,
  secure: true,
  secureOptions: { rejectUnauthorized: false },
  timeout: 15000,
};

const LOCAL = path.join(import.meta.dirname, 'out');

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = false;
  try {
    console.log('🔌 Connecting to Hostinger...');
    await client.access(FTP_CONFIG);
    console.log('✅ Connected (docroot = FTP root)');

    console.log(`🚀 Uploading ${LOCAL} → / ...`);
    await client.uploadDir(LOCAL, '/');
    await client.uploadFrom(path.join(LOCAL, '.htaccess'), '/.htaccess');
    console.log('✅ Upload complete (incl. .htaccess)');

    const files = await client.list('/');
    const names = files.map(f => f.name);
    for (const must of ['index.html', '.htaccess', '_next']) {
      console.log(`  ${must}: ${names.includes(must) ? '✅' : '❌ MISSING'}`);
    }
    console.log('🌐 https://askonlinetutor.com');
  } catch (err) {
    console.error('❌ Deploy error:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
