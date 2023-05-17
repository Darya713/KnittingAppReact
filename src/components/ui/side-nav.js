import React, { useState } from 'react';
import '../../assets/styles/side-nav.scss';

const SideNav = ({ list, selectedItem }) => {
    console.log(selectedItem);
    const [activeTab, setActiveTab] = useState(selectedItem.id ?? list[0].id);
    const handleClick = (e) => {
        const { id } = e;
        setActiveTab(id);
    };

    console.log(activeTab);

    return (
        <div>
            <ul className='side'>
                {list.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className={`side_item ${
                                activeTab === item.id
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() => handleClick(item)}
                        >
                            <img alt='' src={item.imageSource} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideNav;
