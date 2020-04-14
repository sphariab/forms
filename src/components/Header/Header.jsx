import React from 'react'
import Icon from 'components/Icon';
import '../../styleguide/components/headerStyles.scss';

const Header = () => {
  return (
    <div className="header">
      <Icon name="menu" />
      <div className="user-block">
        <Icon name="download" className="icon"/>
        <Icon name="paper" className="icon"/>
        <Icon name="notification" className="icon"/>
        <div className="user-img"></div>
        <div className="user-name">
          Maxim
          <Icon name="arrow-down"/>
        </div>
      </div>
    </div>
  )
}

export default Header
