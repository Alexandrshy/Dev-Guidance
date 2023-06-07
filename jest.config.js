module.exports = {
  roots: ['<rootDir>/src/components'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
