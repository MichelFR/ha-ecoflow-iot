"""Exceptions for the EcoFlow IoT API."""

from __future__ import annotations


class EcoFlowError(Exception):
    """Base error for the EcoFlow API."""


class EcoFlowConnectionError(EcoFlowError):
    """Raised when the API cannot be reached."""


class EcoFlowAuthError(EcoFlowError):
    """Raised when credentials are rejected by the API."""


class EcoFlowApiError(EcoFlowError):
    """Raised when the API returns a non-success business code."""

    def __init__(self, code: str, message: str) -> None:
        """Store the API code and message."""
        self.code = code
        self.message = message
        super().__init__(f"EcoFlow API error {code}: {message}")
