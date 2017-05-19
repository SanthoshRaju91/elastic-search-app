import Ember from 'ember';
import {
  task,
  timeout
} from 'ember-concurrency';

const {
  Component,
  Logger
} = Ember;

export default Component.extend({
  classNames: ['search-container'],
  selectedVerb: 'GET',
  httpVerbs: ['GET', 'PUT', 'POST', 'DELETE'],

  search: Ember.inject.service(),

  performSearch: task(function*() {
    let search = this.get('search');
    let url = this.get('url');
    let request = this.getWithDefault('request', {});
    let verb = this.get('selectedVerb');

    if (url) {
      try {
        let response = '';
        if (Object.keys(request).length === 0) {
          response = yield search.loadSearchResults(url, verb);
        } else {
          response = yield search.loadSearchResults(url, verb, request);
        }
        this.set('response', JSON.stringify(response));
      } catch (err) {
        this.set('response', JSON.stringify(err));
      }
    }

  }).restartable(),

  actions: {
    changeVerb(verb) {
      this.setProperties({
        'selectedVerb': verb,
        'request': {}
      });
    }
  }
});
