'use strict';

const Gatherer = require('lighthouse').Gatherer;

class APITimeToCard extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.APILoadtime')
            .then(APILoadTime => {
                if (!APILoadTime) {

                    throw new Error('Unable to find api load metrics in page');
                }
                return APILoadTime;
            });
    }
}

module.exports = APITimeToCard;