"""
Minions Outreach SDK — Type Schemas
Custom MinionType schemas for Minions Outreach.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

email_template_type = MinionType(
    id="outreach-email-template",
    name="Email template",
    slug="email-template",
    description="A reusable email template for outreach.",
    icon="✉️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="subject", type="string", label="subject"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="intent", type="select", label="intent"),
        FieldDefinition(name="personalizationFields", type="string", label="personalizationFields"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

drip_sequence_type = MinionType(
    id="outreach-drip-sequence",
    name="Drip sequence",
    slug="drip-sequence",
    description="A multi-step email sequence for a lead.",
    icon="💧",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="steps", type="string", label="steps"),
        FieldDefinition(name="delayBetweenDays", type="number", label="delayBetweenDays"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="targetSegment", type="string", label="targetSegment"),
    ],
)

outreach_send_type = MinionType(
    id="outreach-outreach-send",
    name="Outreach send",
    slug="outreach-send",
    description="A record of a sent outreach email.",
    icon="📤",
    schema=[
        FieldDefinition(name="leadId", type="string", label="leadId"),
        FieldDefinition(name="templateId", type="string", label="templateId"),
        FieldDefinition(name="dripSequenceId", type="string", label="dripSequenceId"),
        FieldDefinition(name="stepIndex", type="number", label="stepIndex"),
        FieldDefinition(name="sentAt", type="string", label="sentAt"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="openedAt", type="string", label="openedAt"),
        FieldDefinition(name="clickedAt", type="string", label="clickedAt"),
    ],
)

custom_types: list[MinionType] = [
    email_template_type,
    drip_sequence_type,
    outreach_send_type,
]

