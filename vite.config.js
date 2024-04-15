import {defineConfig} from 'vite';

export default defineConfig({
    test: {
        browser: {
            name: 'chromium',
            provider: 'playwright',
            enabled: true,
            headless: true,
            fileParallelism: false,
        }
    },
})
