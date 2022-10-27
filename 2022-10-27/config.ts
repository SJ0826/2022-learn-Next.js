import getConfig from 'next/config'
import Image from 'next/image'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
console.log(serverRuntimeConfig.mySecret)
console.log(publicRuntimeConfig.staticFolder)

function MyImage() {
  return (
    <div>
      <Image
        src={`${publicRuntimeConfig.staticFolder}/logo.png`}
        alt="logo"
        layout="fill"
      />
    </div>
  )
}

export default MyImage