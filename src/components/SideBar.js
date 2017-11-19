import React from 'react'

const SideBar = ({ items, onItemClick, activeCategory }) => {
  return (
    <div className='sidebar sidebar-left'>
      <ul>
        {items.map((item, index) => <li key={item}
                                        data-category={index}
                                        style={activeCategory == index ? {color: 'blue'} : {}}
                                        onClick={onItemClick}>{item}</li>)}
      </ul>
    </div>
  )
}


export default SideBar
