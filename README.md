# elastic-search-app

This is a small application, built to query the elastic search and help the learner to do a lot of hands on practice while learning elastic search.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Elastic Search](https://www.elastic.co/)

You need to run the elastic search instance while working with this application, and enable the CORS for communicating with elastic search across domain.

## Steps to enabel CORS in elastic search

* Open `config/elasticsearch.yml` file in your favourite editor / terminal from folder where you have installed elastic search.
* Add the following configuration to the file
  `http.cors.enabled: true
   http.cors.allow-origin: "*"`
* Restart the elastic search instance.

## Installation

* `git clone <repository-url>` this repository
* `cd elastic-search-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
