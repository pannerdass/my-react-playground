import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import jwtDecode from "jwt-decode";

const awsConfig = {
  UserPoolId: "ap-south-1_ZKEVAeF5c", // Your user pool id here
  ClientId: "2kh2pgt2qcmp87bo7km03v5akp", // Your client id here
};

const userPool = new CognitoUserPool(awsConfig);
export function signIn(email, passWord) {
  var userData = {
    Username: email,
    Pool: userPool,
  };
  var cognitoUser = new CognitoUser(userData);

  var authenticationData = {
    Username: email,
    Password: passWord,
  };
  var authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise(function (resolve, reject) {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        var id_Token = result.getIdToken().getJwtToken();
        debugger;

        var decodedValue = decodeJWTToken(id_Token);
        sessionStorage.setItem("token", decodedValue);
        sessionStorage.setItem("isAuthenticated", true);
        resolve({ login: true, token: id_Token });
      },
      onFailure: function (error) {
        // debugger;
        //  console.log(error.code);
        reject({ login: false, message: error.message });
      },
    });
  });
}
function decodeJWTToken(token) {
  const { email, exp, auth_time, token_use, sub, name } = jwtDecode(token);
  return { token, email, exp, uid: sub, auth_time, token_use, name };
}
export function signUp({ name, email, password }) {
  var attributeList = [];
  var dataName = {
    Name: "name",
    Value: name,
  };
  var attributeName = new CognitoUserAttribute(dataName);
  attributeList.push(attributeName);

  return new Promise(function (resolve, reject) {
    userPool.signUp(
      email,
      password,
      attributeList,
      null,
      function (err, result) {
        if (err) {
          reject({ flag: true, message: err.message || JSON.stringify(err) });
        }
        if (!err) {
          var cognitoUser = result.user;
          resolve({ flag: false, message: "" });
        }
      }
    );
  });
}
