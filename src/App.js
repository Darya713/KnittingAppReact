import { Component } from 'react';
import knitting from './assets/images/knitting.png';
import './assets/styles/App.scss';
import SideNav from './components/ui/side-nav';
import Tile from './components/ui/tile';

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

    handleLogoClick = () => {
        this.setState({ isMainPage: true });
    };

    selectedItemClick = (selectedItem) => {
        this.setState({ isMainPage: false, selectedItem: selectedItem });
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
                        list={this.state.knittingTypes}
                        selectedItemClick={this.selectedItemClick}
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
        this.setState({
            knittingTypes: data,
            loading: false,
            selectedItem: data[0],
        });
    }
}
