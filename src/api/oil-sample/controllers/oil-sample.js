'use strict';

/**
 * oil-sample controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const fs = require('fs')
const csv = require('csv-parser');
const Papa = require('papaparse')
const { upload } = require("../../../middleware/multer")

module.exports = createCoreController('api::oil-sample.oil-sample', {
	async saveCSV(ctx) {
		const { files } = ctx.request
		if (files && files.csvFile) {
			const file = files.csvFile
			const targetPath = `public/uploads/${file.name}`
			try {
				const data = fs.readFileSync(file.path);
				fs.writeFileSync(targetPath, data);
				return { message: 'File uploaded successfully' };
			} catch (error) {
				return ctx.badRequest('Failed to upload file');
			}
		}
	},
	async saveReport(ctx) {
		const { id, report } = ctx.request.body
		const entry = await strapi.db.query('api::oil-sample.oil-sample').update({
			where: { id: id },
			data: {
				report: report
			}
		})
		if(entry) {
			return { message: 'Report PDF is saved' }
		}
	},
	async getReport(ctx) {
		const { reference } = ctx.request.body.data
		const readPath = `public/uploads/${reference}.csv`
		const csvData = fs.readFileSync(readPath, 'utf8')
		let resultData
		Papa.parse(csvData, {
			header: true,
			dynamicTyping: true,
			complete: (results) => {
				resultData = results
			},
			error: (error) => {
				console.error(2222, error)
			}
		})
		
		return resultData
	},
	async getCSV(ctx) {
		const { reference } = ctx.request.body.data
		const readPath = `public/uploads/${reference}.csv`
		const csvData = fs.readFileSync(readPath, 'utf8')

		return csvData;
	},
	async fetchPreviousSamples(ctx) {
		let previousSampleData
		const { company, sample_point, model_type, equipment } = ctx.request.body.data
		const entries = await strapi.db.query('api::oil-sample.oil-sample').findMany({
			where: {
				company: company,
				sample_point: sample_point,
				model_type: model_type,
				equipment: equipment
			}
		})

		previousSampleData = entries.filter((entry) => {
			return entry.status === 'reviewed' || entry.status === 'completed'
		}).map(entry => {
			const readPath = `public/uploads/${entry.reference}.csv`
			const csvData = fs.readFileSync(readPath, 'utf8')
			let resultData
			Papa.parse(csvData, {
				header: true,
				dynamicTyping: true,
				complete: (results) => {
					const lastElement = results.data.pop()
					resultData = results.data					
				},
				error: (error) => {
					console.error(2222, error)
				}
			})

			return { entry: entry, csvData: resultData }
		})
		
		return previousSampleData
	}
});
