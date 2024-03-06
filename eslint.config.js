import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'dist',
    'public',
    '.pnpm-store',
  ],
  yaml: false,
  markdown: false,
})
