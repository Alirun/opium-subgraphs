// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Collect extends ethereum.Event {
  get params(): Collect__Params {
    return new Collect__Params(this);
  }
}

export class Collect__Params {
  _event: Collect;

  constructor(event: Collect) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount0(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DecreaseLiquidity extends ethereum.Event {
  get params(): DecreaseLiquidity__Params {
    return new DecreaseLiquidity__Params(this);
  }
}

export class DecreaseLiquidity__Params {
  _event: DecreaseLiquidity;

  constructor(event: DecreaseLiquidity) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class IncreaseLiquidity extends ethereum.Event {
  get params(): IncreaseLiquidity__Params {
    return new IncreaseLiquidity__Params(this);
  }
}

export class IncreaseLiquidity__Params {
  _event: IncreaseLiquidity;

  constructor(event: IncreaseLiquidity) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NonfungiblePositionManager__positionsResult {
  value0: BigInt;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: i32;
  value5: i32;
  value6: i32;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: i32,
    value5: i32,
    value6: i32,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set("value5", ethereum.Value.fromI32(this.value5));
    map.set("value6", ethereum.Value.fromI32(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    map.set("value11", ethereum.Value.fromUnsignedBigInt(this.value11));
    return map;
  }
}

export class NonfungiblePositionManager extends ethereum.SmartContract {
  static bind(address: Address): NonfungiblePositionManager {
    return new NonfungiblePositionManager(
      "NonfungiblePositionManager",
      address
    );
  }

  positions(tokenId: BigInt): NonfungiblePositionManager__positionsResult {
    let result = super.call(
      "positions",
      "positions(uint256):(uint96,address,address,address,uint24,int24,int24,uint128,uint256,uint256,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return new NonfungiblePositionManager__positionsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toI32(),
      result[5].toI32(),
      result[6].toI32(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toBigInt()
    );
  }

  try_positions(
    tokenId: BigInt
  ): ethereum.CallResult<NonfungiblePositionManager__positionsResult> {
    let result = super.tryCall(
      "positions",
      "positions(uint256):(uint96,address,address,address,uint24,int24,int24,uint128,uint256,uint256,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NonfungiblePositionManager__positionsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toI32(),
        value[5].toI32(),
        value[6].toI32(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _WETH9(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenDescriptor_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
