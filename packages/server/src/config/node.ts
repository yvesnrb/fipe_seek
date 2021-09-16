const environment = process.env.NODE_ENV as
  | 'test'
  | 'production'
  | 'development'
  | undefined;

export default {
  environment: environment || 'development',
};
