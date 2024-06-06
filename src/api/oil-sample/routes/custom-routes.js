module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/oil-samples/csv-upload',
            handler: 'oil-sample.saveCSV'
        },
        {
            method: 'POST',
            path: '/oil-samples/report',
            handler: 'oil-sample.getReport'
        },
        {
            method: 'POST',
            path: '/oil-samples/save-report',
            handler: 'oil-sample.saveReport'
        },
        {
            method: 'POST',
            path: '/oil-samples/fetch-previous-samples',
            handler: 'oil-sample.fetchPreviousSamples'
        },
        {
            method: 'POST',
            path: '/oil-samples/get-csv',
            handler: 'oil-sample.getCSV'
        }
    ]
}