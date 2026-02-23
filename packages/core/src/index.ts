/**
 * Minions Outreach SDK
 *
 * Email templates, drip sequences, personalization rules, and send schedules
 *
 * @module @minions-outreach/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Outreach.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
