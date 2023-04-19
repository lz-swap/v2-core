import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function({ deployments, getNamedAccounts }) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  await deploy('UniswapV2Factory', {
    from: deployer,
    args: [deployer],
    log: true
  })
}

func.tags = ['Factory']
export default func
