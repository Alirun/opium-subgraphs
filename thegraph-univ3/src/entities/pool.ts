import { Address } from "@graphprotocol/graph-ts";

import { OPIUM } from '../const'

export function isSupportedToken(token: Address): boolean {
  return (
    token.equals(OPIUM)
  );
}
