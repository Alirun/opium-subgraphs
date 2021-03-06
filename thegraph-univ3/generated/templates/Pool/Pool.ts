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

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tickLower(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[5].value.toBigInt();
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

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tickLower(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get amount0(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class CollectProtocol extends ethereum.Event {
  get params(): CollectProtocol__Params {
    return new CollectProtocol__Params(this);
  }
}

export class CollectProtocol__Params {
  _event: CollectProtocol;

  constructor(event: CollectProtocol) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
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

export class Flash extends ethereum.Event {
  get params(): Flash__Params {
    return new Flash__Params(this);
  }
}

export class Flash__Params {
  _event: Flash;

  constructor(event: Flash) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
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

  get paid0(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get paid1(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class IncreaseObservationCardinalityNext extends ethereum.Event {
  get params(): IncreaseObservationCardinalityNext__Params {
    return new IncreaseObservationCardinalityNext__Params(this);
  }
}

export class IncreaseObservationCardinalityNext__Params {
  _event: IncreaseObservationCardinalityNext;

  constructor(event: IncreaseObservationCardinalityNext) {
    this._event = event;
  }

  get observationCardinalityNextOld(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get observationCardinalityNextNew(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Initialize extends ethereum.Event {
  get params(): Initialize__Params {
    return new Initialize__Params(this);
  }
}

export class Initialize__Params {
  _event: Initialize;

  constructor(event: Initialize) {
    this._event = event;
  }

  get sqrtPriceX96(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tick(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tickLower(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class SetFeeProtocol extends ethereum.Event {
  get params(): SetFeeProtocol__Params {
    return new SetFeeProtocol__Params(this);
  }
}

export class SetFeeProtocol__Params {
  _event: SetFeeProtocol;

  constructor(event: SetFeeProtocol) {
    this._event = event;
  }

  get feeProtocol0Old(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get feeProtocol1Old(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get feeProtocol0New(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get feeProtocol1New(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
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

  get sqrtPriceX96(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get tick(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class Pool extends ethereum.SmartContract {
  static bind(address: Address): Pool {
    return new Pool("Pool", address);
  }

  feeGrowthGlobal0X128(): BigInt {
    let result = super.call(
      "feeGrowthGlobal0X128",
      "feeGrowthGlobal0X128():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_feeGrowthGlobal0X128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feeGrowthGlobal0X128",
      "feeGrowthGlobal0X128():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeGrowthGlobal1X128(): BigInt {
    let result = super.call(
      "feeGrowthGlobal1X128",
      "feeGrowthGlobal1X128():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_feeGrowthGlobal1X128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feeGrowthGlobal1X128",
      "feeGrowthGlobal1X128():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
