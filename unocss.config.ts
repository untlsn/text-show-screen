import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
  shortcuts: [
    /* Example
    ['name','uno-classes'],
    */
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('<')) return matcher;

      const mediaPx = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }[matcher.substring(1, matcher.indexOf(':'))] || 0;

      return {
        matcher: matcher.slice(4),
        parent: `@media (max-width: ${mediaPx}px)`,
      };
    },
  ],
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      coffie: {
        black: '#1A1615',
        gray: '#1E1B1A',
        brown: '#523019',
        cream: '#E3C69C',
      },
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
