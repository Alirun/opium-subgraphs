import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";

export let OPIUM = Address.fromString("0x888888888889c00c67689029d7856aac1065ec11");
export let UNISWAP_V3_FACTORY_ADDRESS = Address.fromString("0x1f98431c8ad98523631ae4a59f267346ea31f984");
export let UNISWAP_V3_POSITION_MANAGER_ADDRESS = Address.fromString("0xc36442b4a4522e871399cd717abdd847ab11fe88");

export let ADDRESS_ZERO = Address.zero();
export let BIG_INT_ZERO = BigInt.zero();
export let BIG_INT_1E18 = BigInt.fromString("1000000000000000000");
export let BYTES_ZERO = Bytes.empty();
