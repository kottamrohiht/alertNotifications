import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="AlertNotifications-container">
    <h1 className="AlertNotifications-heading"> Alert Notifications </h1>

    <ul className="unorderlist-container">
      <Notification>
        <AiFillCheckCircle className="success icon" />
        <div className="heading-container">
          <h1 className="notification-heading succes-heading">Success</h1>
          <p className="notification-para">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>

      <Notification>
        <RiErrorWarningFill className="error icon" />
        <div className="heading-container">
          <h1 className="notification-heading error-heading">Error</h1>
          <p className="notification-para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>

      <Notification>
        <MdWarning className="warning icon" />
        <div className="heading-container">
          <h1 className="notification-heading warning-heading">Warning</h1>
          <p className="notification-para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>

      <Notification>
        <MdInfo className="info icon" />
        <div className="heading-container">
          <h1 className="notification-heading info-heading">Info</h1>
          <p className="notification-para">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications
