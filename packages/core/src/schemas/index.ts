/**
 * @module @minions-outreach/sdk/schemas
 * Custom MinionType schemas for Minions Outreach.
 */

import type { MinionType } from 'minions-sdk';

export const emailtemplateType: MinionType = {
  id: 'outreach-email-template',
  name: 'Email template',
  slug: 'email-template',
  description: 'A reusable email template for outreach.',
  icon: '✉️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'subject', type: 'string', label: 'subject' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'intent', type: 'select', label: 'intent' },
    { name: 'personalizationFields', type: 'string', label: 'personalizationFields' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const dripsequenceType: MinionType = {
  id: 'outreach-drip-sequence',
  name: 'Drip sequence',
  slug: 'drip-sequence',
  description: 'A multi-step email sequence for a lead.',
  icon: '💧',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'steps', type: 'string', label: 'steps' },
    { name: 'delayBetweenDays', type: 'number', label: 'delayBetweenDays' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'targetSegment', type: 'string', label: 'targetSegment' },
  ],
};

export const outreachsendType: MinionType = {
  id: 'outreach-outreach-send',
  name: 'Outreach send',
  slug: 'outreach-send',
  description: 'A record of a sent outreach email.',
  icon: '📤',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'templateId', type: 'string', label: 'templateId' },
    { name: 'dripSequenceId', type: 'string', label: 'dripSequenceId' },
    { name: 'stepIndex', type: 'number', label: 'stepIndex' },
    { name: 'sentAt', type: 'string', label: 'sentAt' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'openedAt', type: 'string', label: 'openedAt' },
    { name: 'clickedAt', type: 'string', label: 'clickedAt' },
  ],
};

export const customTypes: MinionType[] = [
  emailtemplateType,
  dripsequenceType,
  outreachsendType,
];

