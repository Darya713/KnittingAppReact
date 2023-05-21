import { Component } from 'react';
import knitting from '../assets/images/knitting.png';
import '../assets/styles/main.scss';
import SideNav from '../components/ui/side-nav';
import Tile from '../components/ui/tile';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            knittingTypes: [],
            loading: true,
            isMainPage: true,
            selectedItem: {},
        };

        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.selectedItemClick = this.selectedItemClick.bind(this);
    }

    handleLogoClick = (value) => {
        this.setState({ isMainPage: value });
    };

    selectedItemClick = (selectedItem) => {
        this.state.knittingTypes.forEach((item) => {
            if (item.id === selectedItem.id) {
                this.setState({ selectedItem: item });
            }
        });
    };

    componentDidMount() {
        this.populateKnittingTypesData();
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleLogoClick}>
                    <img alt='' src={knitting}></img>Knitting app
                </h1>

                {this.state.isMainPage ? (
                    <Tile
                        handleLogoClick={this.handleLogoClick}
                        selectedItemClick={this.selectedItemClick}
                        list={this.state.knittingTypes}
                    />
                ) : (
                    <SideNav
                        list={this.state.knittingTypes}
                        selectedItem={this.state.selectedItem}
                    />
                )}
            </div>
        );
    }

    async populateKnittingTypesData() {
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/knittingtypes`,
            {
                withCredentials: true,
                headers: {
                    Accept: 'applicaiton/json',
                },
            }
        );
        const data = await response.json();
        console.log(data);
        this.setState({ knittingTypes: data, loading: false });
    }
}
