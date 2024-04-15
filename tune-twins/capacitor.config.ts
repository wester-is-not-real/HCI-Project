import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tunetwins.app',
  appName: 'tunetwins',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
