import MainLayout from './MainLayout'
import AbsoluteLayout from './AbsoluteLayout'
import WrapperLayout from './WrapperLayout'
import BaseLayout from './BaseLayout'
import ContainerLayout from './ContainerLayout'
import FlexLayout from './FlexLayout'

const Layout = {
  Absolute: AbsoluteLayout,
  Base: BaseLayout,
  Container: ContainerLayout,
  Flex: FlexLayout,
  Main: MainLayout,
  Wrapper: WrapperLayout,
}

export { Layout }