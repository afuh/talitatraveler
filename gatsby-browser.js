export { wrapRootElement } from './src/utils/wrapRootElement'

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state?.disableScrollUpdate) {
    const { disableScrollUpdate } = location.state
    return !disableScrollUpdate
  }
}
