
import { describe, expect, it } from 'vitest';
import HexletCode from '../src/index';

describe('formFor', () => {
    const template = {
        name: 'rob',
        job: 'hexlet',
        gender: 'm',
    };

    it('generates an empty form with default URL', () => {
        const form = HexletCode.formFor(template, {}, () => {});

        expect(form).toBe('<form action="#" method="post"></form>');
    });

    it('uses the provided URL', () => {
        const form = HexletCode.formFor(
            template,
            { url: '/users' },
            () => {},
        );

        expect(form).toBe('<form action="/users" method="post"></form>');
    });
});
