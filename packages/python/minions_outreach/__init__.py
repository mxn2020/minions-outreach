"""
Minions Outreach Python SDK

Email templates, drip sequences, personalization rules, and send schedules
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Outreach.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
