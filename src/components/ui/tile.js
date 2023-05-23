import '../../assets/styles/tile.scss';

const Tile = ({ selectedItemClick, list }) => {
    return (
        <div className='tiles'>
            {list.map((item) => {
                return (
                    <div id={item.id} key={item.id} className='tile'>
                        <div
                            className='tile-container'
                            onClick={() => {
                                selectedItemClick(item);
                            }}
                        >
                            <img
                                alt=''
                                src={require(`../../assets/images/${item.imageSource}`)}
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
