import nock from 'nock';

const mockServer = nock('http//localhost:5000')
  .get('/posts')
  .reply(200, [
    { _id: 'abc1', title: 'Title 1', body: 'Body 1' },
    { _id: 'abc2', title: 'Title 2', body: 'Body 2' },
    { _id: 'abc3', title: 'Title 3', body: 'Body 3' },
    { _id: 'abc4', title: 'Title 4', body: 'Body 4' },
    { _id: 'abc5', title: 'Title 5', body: 'Body 5' }

  ]);

  export default mockServer;