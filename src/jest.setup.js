import '@testing-library/jest-dom';


process.env.VITE_APP_TITLE = 'Test Title';

global.import = {
  meta: {
    env: {
      VITE_APP_TITLE: process.env.VITE_APP_TITLE
    }
  }
};

// process.env.VITE_APP_TITLE = 'Test Title';

// global.import = {
//   meta: {
//     env: import.meta.env
//   }
// };
