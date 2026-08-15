const { execSync } = require('child_process');

execSync('npx vitest run', {
    stdio: 'inherit',
    shell: true
});