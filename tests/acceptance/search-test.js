import { test } from 'qunit';
import moduleForAcceptance from 'elastic-search-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('visiting /search', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
    assert.equal(find('#search .container>h1').text().trim(), 'Elastic Search APP', 'App header rendered');
    assert.equal(find('#search .container .search-container').length > 0, true, 'Search container rendered');

    assert.equal(find('.search-container .helper-text').length > 0, true, 'Search helper text rendered');
    assert.equal(find('.search-container input').length > 0, true, 'Search request URL textbox rendered');
    assert.equal(find('.search-container select').length > 0, true, 'Search HTTP verb dropdown rendered');
    assert.equal(find('.search-container button').text().trim(), 'Search', 'Search button rendered');
    assert.equal(find('.search-container .request-body').length > 0, true, 'Search request container rendered');
  });


});
