import axios from 'axios';

// ENV Variables
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

////// GET AUTHORIZATION TO USE THE DATABASE ///////////////
const getAuth = async () => {
  //   console.log('getAuthorization Function Firing!');
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  const options = {
    method: 'POST',
  };
  const response = await axios(url, options);
  const accessToken = response.data.access_token;
  // console.log(accessToken);
  return accessToken;
};

export default getAuth;
