'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class APILoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'api-card-audit',
            description: 'Schedule APIs call initialized and ready',
            failureDescription: 'Schedule APIs call slow to initialize',
            helpText: 'Used to measure time from navigation Start to when the schedule' +
            ' API is called.',

            requiredArtifacts: ['APITimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.APITimeToCard;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = APILoadAudit;