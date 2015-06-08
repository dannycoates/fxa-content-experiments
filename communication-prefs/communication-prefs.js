'use strict';

module.exports = {
  name: 'Are the communication preferences enabled',
  startDate: '2015-01-01',
  subjectAttributes: ['lang'],
  independentVariables: ['communicationPrefsVisible'],
  eligibilityFunction: function (subject) {
    return /^en(:?-US)?/.test(subject.lang);
  },
  groupingFunction: function (subject) {
    subject.random = subject.random || Math.random()
    return {
      communicationPrefsVisible: this.bernoulliTrial(0.1, subject.random)
    };
  }
};
