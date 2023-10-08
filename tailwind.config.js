/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'd': '72.5rem' //(desktop) [1160px]
    },
    extend: {
      colors: {
        'veryDarkMagenta': 'hsl(300, 43%, 22%)',
        'darkGrayishMagenta': 'hsl(303, 10%, 53%)',
        'softPink': 'hsl(333, 80%, 67%)',
        'lightGrayishMagenta': 'hsl(300, 24%, 96%)',
        'myWhite': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'leagueSpartan': ['League Spartan']
      },
      fontSize: {
        'h1': '2.375rem', // [38px]
        'h1--d': '3.1875rem', // [51px]
        'h2': '1.0625rem', // [17px]
        'h2--d': '1rem', // [16px]
        'header__desc': '1.125rem', // [18px]
        'testimonials__desc': '1rem', // [16px]
      },
      lineHeight: {
        'h1': '2.075rem', // [33.2px]
        'h1--d': '3rem', // [48px]
        'h2': '1rem', // [16px]
        'h2--d': '0.9375rem', // [15px]
        'header__desc': '1.5rem', // [24px]
        'testimonials__desc': '1.375rem', // [22px]
        'header__job': '1rem', // [16px]
        'header__job--d': '0.9375rem' // [15px]
      },
      letterSpacing: {
        'h1': '-0.012em', // -1.2%
        'h1--d': '0.005em', // 0.5%
        'header__desc': '-0.005em', // -0.5%
        'header__desc--d': '-0.002em', // -0.2%
        'rating__title--d': '0.03em', // 3%
        'testimonials__name': '0.002em', // 0.2%
        'testimonials__name--d': '0.02em', // 2%
        'testimonials__job': '0.001em', // 0.1%
        'testimonials__job--d': '0.025em', // 2.5%
        'testimonials__desc': '0.007em', // 0.7%
      },
      gap: {
        'header': '1.375rem', // [22px]
        'header--d': '1.625rem', // [26px]
        'rating': '1rem', // [16px]
        'rating--d': '1.125rem', // [18px]
        'rating__item': '0.875rem', // [14px]
        'rating__item--d': '2.0625rem', // [33px]
        'rating__star': '0.5rem', // [8px]
        'rating__star--d': '0.5625rem', // [9px]
        'testimonials': '0.8125rem', // [13px]
        'testimonials--d': '1.875rem', // [30px]
        'testimonials__item': '1.875rem', // [30px]
        'testimonials__item--d': '1.625rem', // [26px]
        'testimonials__user': '1.375rem', // [22px]
        'testimonials__user--d': '1.5rem', // [24px]
        'testimonials__info': '0.25rem', // [4px]
        'testimonials__info--d': '0.5rem', // [8px]
      },
      spacing: {
        'body_T': '5.0625rem', // [81px]
        'body_T--d': '7.4375rem', // [119px]
        'body_B': '6.1875rem', // [99px]
        'rating__item_Y': '0.9375rem', // [15px]
        'rating__item_Y--d': '1.1875rem', // [19px]
        'testimonials__item_T': '2.625rem', // [42px]
        'testimonials__item_B': '1.8125rem', // [29px]
        'testimonials__item_B--d': '2.375rem', // [38px]
        'testimonials__item_X': '2rem', // [32px]
      },
      margin: {
        'rating_T': '2.75rem', // [44px]
        'rating_T--d': '1.6875rem', // [27px]
        'rating_B': '3.125rem', // [50px]
        'rating_B--d': '5.625rem', // [90px]
      },
      borderRadius: {
        'rating__item': '0.4375rem', // [7px]
        'testimonials__item': '0.4375rem' // [7px]
      },
      width: {
        'wrapper': '69.4375rem', // [1111px]
        'header': '25.75rem', // [412px]
        'rating': '33.8125rem', // [541px]
        'rating__item': '27.8125rem', // [445px]
        'star': '1.0625', // [17px]
        'star--d': '1rem', // [16px]
        'testimonials__item--d': '21.875rem', // [350px]
        'testimonials__img': '2.5rem' // [40px]
      },
      height: {
        'star': '1rem', // [16px]
        'star--d': '1rem', // [16px]
        'testimonials--d': '16.5625rem', // [265px]
        'testimonials__img': '2.5rem' // [40px]
      },
    },
  },
  plugins: [],
}

