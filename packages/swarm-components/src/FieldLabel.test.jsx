import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';

import { getTestMarkup } from './testUtils/testUtils.js';

import FieldLabel from './FieldLabel';
import Checkbox from './Checkbox';

describe('FieldLabel', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 250, height: 200 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	it('Visually matches', async () => {
		expect(
			await renderer.screenshot(<FieldLabel>Field Label</FieldLabel>)
		).toMatchImageSnapshot();
	});
});
