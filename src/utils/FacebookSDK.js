const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
// export const fbLogic = () => {
//     return new Promise((resolve, reject) => {
//         window.fbAsyncInit = () => {
//             window.FB.init({
//                 appId: facebookAppId,
//                 autoLogAppEvents: true,
//                 xfbml: true,
//                 version: 'v11.0',
//             });
//             FB.AppEvents.logPageView();
//         };
//
//         resolve()(function (d, s, id) {
//             var js,
//                 fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) {
//                 return;
//             }
//             js = d.createElement(s);
//             js.id = id;
//             js.src = 'https://connect.facebook.net/en_US/sdk.js';
//             fjs.parentNode.insertBefore(js, fjs);
//         })(document, 'script', 'facebook-jssdk');
//     });
// };

export const initFacebookSdk = () => {
    return new Promise((resolve, reject) => {
        // Load the Facebook SDK asynchronously
        // console.log('window 1', window);
        window.fbAsyncInit = () => {
            // console.log('window 2', window.FB);
            window.FB.init({
                appId: facebookAppId,
                cookie: true,
                xfbml: true,
                version: 'v18.0',
            });
            // Resolve the promise when the SDK is loaded
            resolve();
        };
        fbAsyncInit();
    });
};

export const getFacebookLoginStatus = () => {
    return new Promise((resolve, reject) => {
        window.FB.getLoginStatus((response) => {
            resolve(response);
        });
    });
};

export const fbLogin = () => {
    return new Promise((resolve, reject) => {
        window.FB.login(
            (response) => {
                resolve(response);
            },
            { scope: 'public_profile,email' }
        );
    });
};

export const fbLogout = () => {
    return new Promise((resolve, reject) => {
        window.FB.logout((response) => {
            resolve(response);
        });
    });
};

export const fbApi = (accessToken) => {
    return new Promise((resolve, reject) => {
        window.FB.api(`/${accessToken}`, (response) => {
            resolve(response);
        });
    });
};

export const fbMe = () => {
    return new Promise((resolve, reject) => {
        window.FB.api('/me', { fields: 'name, email' }, (response) => {
            resolve(response);
        });
    });
};
