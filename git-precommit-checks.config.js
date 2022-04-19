module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      message: 'You’ve got conflict markers laying around',
      regex: /^[<>|=]{4,}/m,
    },
  ],
};
