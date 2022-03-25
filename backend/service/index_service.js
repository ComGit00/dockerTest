const testDAO = require('../report/indexDAO');

exports.test = (req) => {
    return new Promise(
        async(resolve, reject) => {
            try {
                let test = await testDAO.selectTest({test_id : '1'});
                console.log(test)
                resolve({test: "testTimes"});
            } catch(error) {
                reject(error);
            }
        }
    )
}