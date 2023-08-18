# Backend Coding Challenge

## Overview

We need to provide our stakeholders with an easy way to pass links to the customers so they can get information about their upcoming appointments with Enpal.

The goal of the project is to implement two endpoints, which are:

* An endpoint that takes a long URL as input and returns a shortened version of that URL.
* An endpoint that can be accessed through the shortened URL and redirects the user to the original long URL.

### Requirements

* The shortened URL should be a unique key that can be used to retrieve the original long URL.
* The shortened URL should be accessible through a web browser.
* The shortened URL should redirect the user to the original long URL.
* The shortened URL should not be case sensitive
* An original URL should be a usable URL
* A URL should only be saved once

### Additional Requirement

We also have an additional requirement from our hosting provider. To ensure that we are in line with their terms and conditions, we must disallow/restrict redirects to URLs that violate any of the rules listed below:

1. **Banned words**: We are not allowed to shorten URLs that contain any of these words. We must return a 400 error with the message "URL contains a banned word". These words are:

        bannedi, bannedii, bannediii, bannediv, bannedv

2. **Illegal domains**: We are not allowed to shorten URLs that belong to any of these domain names. We must return a 451 error with the message "This content is illegal". These domains are:

        illegali.com, illegalii.com, illegaliii.com, illegaliv.com, illegalv.com

    **IMPORTANT**: The top-level domain does NOT matter. E.g illegali.com, illegali.net, illegali.io are all equally invalid

3. **Restricted domains**: We are allowed to shorten URLs with these domain names. However, whenever we receive a request to redirect to any of the domain names, we must verify that the user is an adult. 

    We can verify this by checking that the redirect request contains the query parameter `?isadult=true`. If the request does not contain this URL, then we must return a 403 error with the message "You're not allowed to access this page". These domains are:

        restrictedi.com, restrictedii.net, restrictediii.io, restrictediv.com, restrictedv.io

    **IMPORTANT**: The top-level domain matters. Only these specific domains should be restricted. E.g restrictedi.com is restricted, but restrictedi.net is NOT restricted.

### Future Requirements (for discussion)

* We need to automatically delete shortened URLs from our system if they have not been used in the last 90 days. How could we implement this?

### System Requirements

* A functional installation of node.js 14+
* A code editor you're comfortable with.
* **Optional** Docker

### Getting Started

* Clone the project repository
* Run the application with your IDE of choice or by running `npm run dev:watch`
* Implement the required endpoints. Basic scaffolding for them already exists in our index file.
* Test your implementation using a web browser, or a tool like curl. You may use any tool or library you like
