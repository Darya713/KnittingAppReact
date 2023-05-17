import '../../assets/styles/tile.scss';

const Tile = ({ handleLogoClick, selectedItemClick, list }) => {
    return (
        <div className='tiles'>
            {list.map((item) => {
                return (
                    <div id={item.id} key={item.id} className='tile'>
                        <div
                            className='tile-container'
                            onClick={() => {
                                handleLogoClick(false);
                                selectedItemClick(item);
                            }}
                        >
                            <img
                                alt=''
                                className={item.imageSize}
                                src={item.imageSource}
                            />
                            <label>{item.label}</label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Tile;
