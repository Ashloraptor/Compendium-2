import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// const env = loadEnv(mode, process.cwd(),'');

// https://vitejs.dev/config/
export default defineConfig(({mode}) =>{
  const env = loadEnv(mode, process.cwd(), '');
  return{
    define:{
      'process.env.REACT_APP_SECRET_KEY': JSON.stringify(env.REACT_APP_SECRET_KEY)
    },
  
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
}
});

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true,
//     proxy: {
//       '/graphql': {
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });


/////this is throwing an error in console////