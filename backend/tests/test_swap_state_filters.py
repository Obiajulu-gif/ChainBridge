import pytest
from fastapi import HTTPException

from app.routes.swaps import validate_swap_state_filter


def test_valid_swap_state_filter_is_normalized():
    assert validate_swap_state_filter("EXECUTED") == "executed"


def test_missing_swap_state_filter_is_allowed():
    assert validate_swap_state_filter(None) is None


def test_invalid_swap_state_filter_returns_clear_client_error():
    with pytest.raises(HTTPException) as exc:
        validate_swap_state_filter("unknown")

    assert exc.value.status_code == 400
    assert "Invalid swap state 'unknown'" in exc.value.detail
    assert "Allowed values" in exc.value.detail
