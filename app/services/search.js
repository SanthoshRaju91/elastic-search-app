import Ember from 'ember';
import config from '../config/environment';

const {
  Service,
  RSVP,
  $
} = Ember;

export default Service.extend({

  init() {
    this.set('searchAPI', config.APP.SEARCH_API);
  },

  loadSearchResults(url, method, request) {
    let apiURL = `${this.get('searchAPI')}${url}`;

    return new RSVP.Promise((resolve, reject) => {
        $.ajax(apiURL, {
          method,
          data: JSON.stringify(request)
        }).then((response) => {
          return resolve(response);
        }, (error) => {
          return reject(error);
        });
    });
  }
});
