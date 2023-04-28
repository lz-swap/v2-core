import { task } from 'hardhat/config'
import { keccak256 } from '@ethersproject/solidity'

export default task('initCodeHash', 'get init code hash').setAction(async (taskArgs, hre) => {
  const pair = hre.artifacts.readArtifactSync('contracts/UniswapV2Pair.sol:UniswapV2Pair')
  console.log({ initCodeHash: keccak256(['bytes'], [pair.bytecode]) })
})
