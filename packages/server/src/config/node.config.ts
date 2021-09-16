const environment = process.env.NODE_ENV as
  | 'test'
  | 'production'
  | 'development'
  | undefined;

export const nodeConfig = {
  environment: environment || 'development',
};
