import { initialize, isEnabled } from 'unleash-client';

const client = initialize({
    appName: 'my-application',
    url: 'http://unleash.herokuapp.com/api/',
  });
  
  client.on('error', console.error);
  client.on('warn', console.log);
  
  console.log('Fetching toggles from: http://unleash.herokuapp.com');
  
  
  client.on('synchronized', () => {
      console.log(isEnabled('Demo'));
  })
  