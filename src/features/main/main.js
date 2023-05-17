import { useState } from 'react';
import gloves from '../../assets/images/gloves.png';
import hat from '../../assets/images/hat.png';
import scarf from '../../assets/images/scarf.png';
import socks from '../../assets/images/socks.png';
import sweater from '../../assets/images/sweater.png';
import SideNav from '../../components/ui/side-nav';
import Tile from '../../components/ui/tile';
import '../../assets/styles/main.scss';
import knitting from '../../assets/images/knitting.png';

const Main = () => {
    let list = [
        {
            id: 'gloves',
            imageSource: gloves,
            imageSize: 'small',
            label: 'Gloves',
        },
        {
            id: 'hat',
            imageSource: hat,
            imageSize: 'middle',
            label: 'Hat',
        },
        {
            id: 'scarf',
            imageSource: scarf,
            imageSize: 'small',
            label: 'Scarf',
        },
        {
            id: 'socks',
            imageSource: socks,
            imageSize: 'middle',
            label: 'Socks',
        },
        {
            id: 'sweater',
            imageSource: sweater,
            imageSize: 'large',
            label: 'Sweater',
        },
    ];

    const [isMainPage, setMain] = useState(true);
    const handleLogoClick = (value) => {
        setMain(value);
    };

    const [selectedItem, setSelectedItem] = useState({});
    const selectedItemClick = (selectedItem) => {
        list.forEach((item) => {
            if (item.id === selectedItem.id) {
                setSelectedItem(item);
            }
        });
    };

    return (
        <div>
            <h1 onClick={handleLogoClick}>
                <img alt='' src={knitting}></img>Knitting app
            </h1>

            {isMainPage ? (
                <Tile
                    handleLogoClick={handleLogoClick}
                    selectedItemClick={selectedItemClick}
                    list={list}
                />
            ) : (
                <SideNav list={list} selectedItem={selectedItem} />
            )}
        </div>
    );
};

export default Main;
