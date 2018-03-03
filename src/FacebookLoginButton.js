import React, { Component } from 'react';

class FacebookLogin extends Component {
    
    constructor()
    {
        super();
        
        this.facebookLogin = this.facebookLogin.bind(this);
        this.initializeFacebookLogin = this.initializeFacebookLogin.bind(this);
        this.checkLoginStatus = this.checkLoginStatus.bind(this);
        this.facebookLoginHandler = this.facebookLoginHandler.bind(this);
    }

    componentDidMount()
    {
        document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    componentWillUnmount()
    {
        document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    /**
     * Init FB object and check Facebook Login status
     */
    initializeFacebookLogin()
    {
        this.FB = window.FB;
        this.userID = 0;
        this.checkLoginStatus();
    }

    /**
     * Check login status
     */
    checkLoginStatus()
    {
        this.FB.getLoginStatus(this.facebookLoginHandler);
    }

    /**
     * Check login status and call login api is user is not logged in
     */
    facebookLogin()
    {
        if (!this.FB) return;

        this.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log('Logged in.');
            }
            else {
                this.FB.login(function(response) {
                    console.log(response);
                }, {scope: 'public_profile,user_friends,publish_actions,user_relationships,user_work_history,user_photos'});
            }
        });
    }

    /**
     * Handle login response
     */
    facebookLoginHandler(response)
    {
        if (response.status === 'connected') {
            this.FB.api('/me', userData => {
                let result = {
                    ...response,
                    user: userData
                };
                //this.userID = result.authResponse.userID;
                this.props.onLogin(true, result);
            });

            // just checking permissions but can be removed
            // this.FB.api('/me/permissions', function(response) {
            //   console.log(response);
            // });

            // get the photos
            // this.
            // FB.api(
            //     '/me/photos?type=uploaded&limit=500',
            //     'GET',
            //     {},
            //     function(response) {
            //
            //         for (var i = 0; i )
            //
            //             FB.api(
            //                 "/{photo-id}",
            //                 function (response) {
            //                     if (response && !response.error) {
            //                         /* handle the result */
            //                     }
            //                 }
            //             );
            //     });

        } else {
            this.props.onLogin(false);
        }
    }

    render()
    {
        let {children} = this.props;
        return (
            <div onClick={this.facebookLogin}>
                {children}
            </div>
        );
    }
}

export default FacebookLogin;
