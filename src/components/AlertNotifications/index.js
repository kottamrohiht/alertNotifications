import Notification from '../Notification'

import './index.css'

const notifications = [
  {
    id: 1,
    Icon: 'AiFillCheckCircle',
    Heading: 'Success',
    Description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    Icon: 'RiErrorWarningFill',
    Heading: 'Error',
    Description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    Icon: 'MdWarning',
    Heading: 'Warning',
    Description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    Icon: 'MdInfo',
    Heading: 'Info',
    Description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="AlertNotifications-container">
    <h1 className="AlertNotifications-heading"> Alert Notifications </h1>

    <ul className="unorderlist-container">
      {notifications.map(each => (
        <Notification key={each.id}>{each}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
