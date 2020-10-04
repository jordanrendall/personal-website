const stravaApi = require('strava-v3');
stravaApi.config({
  access_token: process.env.STRAVA_ACCESS_TOKEN,
  client_id: process.env.STRAVA_CLIENT_ID,
  client_secret: process.env.STRAVA_CLIENT_SECRET,
  redirect_uri: process.env.STRAVA_REDIRECT_URI,
});

stravaApi.oauth.refreshToken(process.env.STRAVA_REFRESH_TOKEN);
const strava = new stravaApi.client(process.env.STRAVA_ACCESS_TOKEN);

exports.handler = async function(event, context) {
  const data = await strava.athletes.listActivities({}, () => {
    console.log('done');
  });
  console.log(data);

  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: 'test',
  };
};
