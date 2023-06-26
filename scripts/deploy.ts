import { ethers } from "hardhat"
import { TOKEN_SUPPLY } from "./constants"

async function main() {
  const ftkC = await ethers.deployContract("FTK", [TOKEN_SUPPLY], {})

  await ftkC.waitForDeployment()

  console.log(`FTK deployed to ${ftkC.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
