# WebIDHunt
[![HitCount](http://hits.dwyl.com/RoboMx/WebIDHunt.svg)](http://hits.dwyl.com/RoboMx/WebIDHunt)

Client based app to get information about username availability from different important websites. This tool can be used by startups, tech enthusiast, and people who want to block particular username on important domains.

## Features
* No backend required.
* Add enormous endpoint.
* PWA app based on Nuxt framework.
* Easily book your username if they are available.
* Responsive UI using Bulma framework.

## Support:
<a href='https://ko-fi.com/Y8Y31LBT4' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>


## Contribute:

* Get details about the url endpoint for checking username.
    * Example: `https://github.com/<username>`
* Next fork this repository and edit the `static/list.js`.
    * To add category.
        ```
        domains: {
            <category>: [
                ...
            ]
        }

        ```

    * To add new id in category.
        ```
        <category>: [
            ...
            {
                "name": "<id_name>",
                "endpoint": "<id_endpoint>",
                "logo": "<id_logo>"
            }
            ...
        ]
        ```
    * Send a pull request.
