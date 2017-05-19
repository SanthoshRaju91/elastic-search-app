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
    let request = this.get('request');
    let verb = this.get('selectedVerb');

    if (url) {
      try {
        let response = yield search.loadSearchResults(url, verb, request);
        this.set('response', JSON.stringify(response));
      } catch (err) {
        this.set('response', JSON.stringify(err));
      }
    }

  }).restartable()
});
