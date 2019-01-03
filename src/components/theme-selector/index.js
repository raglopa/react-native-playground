import { connect } from 'react-redux'
import ThemeSelector from './theme-selector'
import { switchTheme } from './reducer'

const mapDispatchToProps = {
  switchTheme: switchTheme,
}

export default connect(
  null,
  mapDispatchToProps
)(ThemeSelector)
