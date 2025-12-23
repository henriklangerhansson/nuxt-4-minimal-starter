import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'

export default withNuxt({
  files: ['**/*.{js,ts,vue}'],
  plugins: {
    tailwindcss: eslintPluginTailwindCSS,
  },

  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'tailwindcss/no-custom-classname': 'off',
    ...eslintPluginTailwindCSS.configs.recommended.rules,

  },
})
