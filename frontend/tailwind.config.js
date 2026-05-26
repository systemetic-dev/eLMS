// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'fluid': 'cubic-bezier(0.3, 1, 0.4, 1)', // Snappy out-easing perfect for UI cards
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.3, 1, 0.4, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
}