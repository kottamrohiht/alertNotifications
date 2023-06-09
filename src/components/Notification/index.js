import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  const {Icon, Heading, Description} = children

  const renderImg = () => {
    switch (Icon) {
      case 'AiFillCheckCircle':
        return <AiFillCheckCircle className="success icon" />
      case 'RiErrorWarningFill':
        return <RiErrorWarningFill className="error icon" />

      case 'MdWarning':
        return <MdWarning className="warning icon" />

      case 'MdInfo':
        return <MdInfo className="info icon" />

      default:
        return null
    }
  }

  const renderCss = () => {
    switch (Icon) {
      case 'AiFillCheckCircle':
        return 'succes-heading'
      case 'RiErrorWarningFill':
        return 'error-heading'

      case 'MdWarning':
        return 'warning-heading'

      case 'MdInfo':
        return 'info-heading'

      default:
        return null
    }
  }

  return (
    <li className="each-notifications-container">
      {renderImg()}
      <div className="heading-container">
        <h1 className={`notification-heading ${renderCss()} `}>{Heading}</h1>
        <p className="notification-para">{Description}</p>
      </div>
      <GrFormClose className="close-icon" />
    </li>
  )
}

export default Notification
