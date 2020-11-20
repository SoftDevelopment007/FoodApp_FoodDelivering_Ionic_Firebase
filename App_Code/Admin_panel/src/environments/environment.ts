// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD4j-5HbcXZlCknmkvyG0Ww0ogEo7hGDcA",
    authDomain: "bathbites-f3d94.firebaseapp.com",
    databaseURL: "https://bathbites-f3d94.firebaseio.com",
    projectId: "bathbites-f3d94",
    storageBucket: "bathbites-f3d94.appspot.com",
    messagingSenderId: "1015612137899",
    appId: "1:1015612137899:web:2a47d4e018c855583932ee",
    measurementId: "G-7H8RD0KG1V"
  },
  onesignal: {
    appId: '',
    googleProjectNumber: '',
    restKey: ''
  },
  stripe: {
    sk: ''
  },
  general: {
    symbol: '$',
    code: 'USD'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
