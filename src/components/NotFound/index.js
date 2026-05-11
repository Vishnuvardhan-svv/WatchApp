import AppTheme from '../../context/AppTheme'
import {DivElement, ImageElement} from './styledComponents'

const NotFound = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value
      const bgColor = activeTheme === light ? '#ffffff' : '#000000'
      const color = activeTheme === light ? '#000000' : '#ffffff'
      return (
        <DivElement bgColor={bgColor} color={color}>
          {activeTheme === 'light' ? (
            <>
              <ImageElement src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" />
            </>
          ) : (
            <>
              <ImageElement src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png" />
            </>
          )}
          <h1>Page Not Found</h1>
          <p>We are sorry,the page you requested could not be found.</p>
        </DivElement>
      )
    }}
  </AppTheme.Consumer>
)

export default NotFound
