# SAPUI5 New York Times Article Search
New York Times Article Search App using SAPUI5

## About this app

This app uses a JSON model to call NYT Article Search free API

# Installation

## How to clone in SAP Web IDE

Open SAP Web IDE and from the menu go to:

File >> Git >> Clone Repository

When paste the link below

[https://github.com/fabiopagoti/sapui5-nyt-article-search](https://github.com/fabiopagoti/sapui5-nyt-article-search)

## Create a SAP Cloud Destination to NYT

Inside Cloud Platform Cockpit, create a Destination using the menu option Connectivity >> Destinations

You can easily import [file NYT](https://github.com/fabiopagoti/sapui5-nyt-article-search/blob/master/NYT) located at the root of the repository for your convenience.

If you want to create the destination manually, enter the information below

Destination details:

* Name: NYT
* Type: HTTP
* Description: New York Times (or any other name)
* URL: https://api.nytimes.com
* Proxy Type: Internet
* Authentication: NoAuthentication

Additional properties:
* WebIDEEnabled: true

## Get a NYT API key

Get a free Article Search API key in

[http://developer.nytimes.com/](http://developer.nytimes.com/)

## Insert your API Key 

Open file [Component.js](https://github.com/fabiopagoti/sapui5-nyt-article-search/blob/master/Component.js) located at the root of the repo and insert your API Key according to the comment in such file

## Check out remote branches!

This repo constains two remote branches:

[simple](https://github.com/fabiopagoti/sapui5-nyt-article-search/tree/simple) - A simpler version of the app
[master](https://github.com/fabiopagoti/sapui5-nyt-article-search) - A more advanced version of the app