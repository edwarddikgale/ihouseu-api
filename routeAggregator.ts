import express, { Application } from 'express';
import postsRoutes from './routes/api/posts';
import commentsRoutes from './routes/api/comments';
import eventRsvpsRoutes from './routes/api/eventRsvps';
import ihouseuUsers from './routes/api/ihouseuUsers';
import interactQueues from './routes/api/interactQueues';
import postLogs from './routes/api/postLogs';
import socialAccounts from './routes/api/socialAccounts';

class RouteAggregator {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  /**
  * This function adds all routes that are known to the (app) instance
  * @returns {void}
  */
  init(): void {
    this.app.use('/api/posts', postsRoutes);
    this.app.use('/api/comments', commentsRoutes);
    this.app.use('/api/eventRsvps', eventRsvpsRoutes);
    this.app.use('/api/ihouseuusers', ihouseuUsers);
    this.app.use('/api/interactQueue', interactQueues);
    this.app.use('/api/postLogs', postLogs);
    this.app.use('/api/socialAccounts', socialAccounts);
  }
}

export default RouteAggregator;
