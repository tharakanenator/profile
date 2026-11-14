module.exports = {
  content: [
    './index.html',
    './404.html',
    './blog/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
  ],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
};
