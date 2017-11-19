import React from 'react'

const SideBar = ({ items, onItemClick }) => {
  return (
    <div className='sidebar sidebar-left'>
      <ul>
        {items.map((item, index) => <li key={item} data-category={index} onClick={onItemClick}>{item}</li>)}
      </ul>
    </div>
  )
}


export default SideBar
