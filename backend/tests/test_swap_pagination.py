from types import SimpleNamespace

from app.routes.swaps import build_swap_list_response


def make_swap(swap_id: str, chain: str, state: str):
    return SimpleNamespace(
        id=swap_id,
        onchain_id=None,
        stellar_htlc_id=None,
        other_chain=chain,
        other_chain_tx=None,
        stellar_party="GA_STELLAR",
        other_party="0xOTHER",
        state=state,
        created_at=None,
    )


def test_swap_list_response_includes_pagination_metadata():
    swaps = [make_swap("swap-1", "ethereum", "executed")]

    response = build_swap_list_response(swaps, limit=10, offset=20)

    assert response.limit == 10
    assert response.offset == 20
    assert response.count == 1
    assert len(response.items) == 1
    assert response.items[0].other_chain == "ethereum"
    assert response.items[0].state == "executed"


def test_swap_list_response_preserves_filtered_items():
    swaps = [make_swap("swap-2", "solana", "locked")]

    response = build_swap_list_response(swaps, limit=5, offset=0)

    assert response.count == 1
    assert response.items[0].other_chain == "solana"
    assert response.items[0].state == "locked"
