import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"

import { Transfer } from '../generated/GUniPool/GUniPool'
import { Pool, User } from '../generated/schema'

let ZERO_ADDRESS = Bytes.fromHexString('0x0000000000000000000000000000000000000000') as Bytes

let POOL_ID = '1337'

const getUser = (userAddress: Address): User => {
  let userId = userAddress.toHex()
  let user = User.load(userId)
  if (user === null) {
    user = new User(userId)
    user.balance = BigInt.fromI32(0);
    user.save()
  }
  return user as User
}

const getPool = (): Pool => {
  let pool = Pool.load(POOL_ID)
  if (pool === null) {
    pool = new Pool(POOL_ID)
    pool.totalSupply = BigInt.fromI32(0);
    pool.save()
  }
  return pool as Pool
}

export function handleTransfer(event: Transfer): void {
  let value = event.params.value

  // Mint
  if (event.params.from == ZERO_ADDRESS) {
    let pool = getPool()
    pool.totalSupply = pool.totalSupply.plus(value)
    pool.save()

    let toUser = getUser(event.params.to)
    toUser.balance = toUser.balance.plus(value)
    toUser.save()

    return
  }
  
  // Burn
  if (event.params.to == ZERO_ADDRESS) {
    let pool = getPool()
    pool.totalSupply = pool.totalSupply.minus(value)
    pool.save()

    let fromUser = getUser(event.params.from)
    fromUser.balance = fromUser.balance.minus(value)
    fromUser.save()
    return
  }

  // Transfer
  if (event.params.from == event.params.to) {
    return
  }

  let fromUser = getUser(event.params.from)
  fromUser.balance = fromUser.balance.minus(value)
  fromUser.save()


  let toUser = getUser(event.params.to)
  toUser.balance = toUser.balance.plus(value)
  toUser.save()
}
