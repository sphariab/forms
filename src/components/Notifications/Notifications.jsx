import React from 'react'
import '../../styleguide/components/notificationStyles.scss';
import Icon from 'components/Icon';

const Notifications = () => {
  return (
    <div className="notification-container">
      <div className="notification">
        <div className="text text-black">
          Effective Date has changed from <br/> 04/08/2019 to 04/10/2019
          <span className="text-red"> New</span>
        </div>
        <div className="text text-grey">Non-residential building </div>
        <div className="text text-grey"><Icon name="user-icon" />05/14/2019 </div>
      </div>
      <div className="notification">
        <div className="text text-black">
          Effective Date has changed from <br/> 04/08/2019 to 04/10/2019
          <span className="text-red"> New</span>
        </div>
        <div className="text text-grey">Non-residential building </div>
        <div className="text text-grey"><Icon name="user-icon" />05/14/2019 </div>
      </div>
      <div className="notification">
        <div className="text text-black">
          Effective Date has changed from
          <span className="text-red"> New</span>
        </div>
        <div className="text text-grey">Non-residential building </div>
        <div className="text text-grey"><Icon name="user-icon" />05/14/2019 </div>
      </div>
      <div className="show-link">Show more <span className="text">(12)</span></div>
    </div>
  )
}

export default Notifications
