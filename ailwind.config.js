module.exports = {
    content: [
      "./index.html",
      "./script.js"
    ],
    theme: {
      extend: {
        colors: {
          'gray-900': '#111827',
          'gray-800': '#1F2937',
          'gray-700': '#374151',
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            'to': { opacity: '1', transform: 'translateY(0)' },
          }
        }
      },
    },
    plugins: [],
  }