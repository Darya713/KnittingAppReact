import React, { useState } from 'react';
import '../../assets/styles/side-nav.scss';

const SideNav = ({ list, selectedItem }) => {
    const [activeTab, setActiveTab] = useState(selectedItem.id ?? list[0].id);
    const handleClick = (e) => {
        setActiveTab(e);
    };

    return (
        <div>
            <ul className='side'>
                {list.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className={`side_item ${
                                activeTab === item.id ? 'active' : ''
                            }`}
                            onClick={() => handleClick(item)}
                        >
                            <img
                                alt=''
                                src={require(`../../assets/images/${item.imageSource}`)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideNav;
