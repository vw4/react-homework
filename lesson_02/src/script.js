const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];
const ROLL_DELAY_MS = 2 * 1000;

class Animal extends React.Component {
    render() {
        const {icon = '', type = '', isActive = false} = this.props;
        const classNames = ['table__animal'];
        if (isActive) {
            classNames.push('table__animal--active');
        }

        return <tr className={classNames.join(' ')}>
            <td>{icon}</td>
            <td>{type}</td>
        </tr>;
    }
}

class AnimalsTable extends React.Component {
    state = {
        inactiveAnimalsIndexes: this.props.animals
            .map((animal, index) => index)
            .sort(() => Math.random() - 0.5),
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.activateRandomAnimal(), ROLL_DELAY_MS);
    }

    isAnimalActive(animalIndex) {
        return !this.state.inactiveAnimalsIndexes.includes(animalIndex);
    }

    activateRandomAnimal() {
        this.setState(
            {inactiveAnimalsIndexes: this.state.inactiveAnimalsIndexes.slice(1)},
            () => this.onAnimalActivated()
        );
    }

    isAllAnimalsActivated() {
        return !this.state.inactiveAnimalsIndexes.length;
    }

    onAnimalActivated() {
        if (this.isAllAnimalsActivated()) {
            clearInterval(this.intervalId);
        }
    }

    getBorderWidth() {
        const {animals} = this.props;
        const {inactiveAnimalsIndexes} = this.state;
        if (this.isAllAnimalsActivated()) {
            return '20px';
        }
        if (inactiveAnimalsIndexes.length < animals.length / 2) {
            return '10px';
        }
    }

    render() {
        const {animals} = this.props;
        if (!animals || !animals.length) {
            return null;
        }

        const getAnimalRow = (animal, index) =>
            <Animal
                key={index}
                type={animal.type}
                icon={animal.icon}
                isActive={this.isAnimalActive(index)}
            />

        return <table className={'table'} style={{borderWidth: this.getBorderWidth()}}>
            <tbody>
                {animals.map(getAnimalRow)}
            </tbody>
        </table>;
    }
}

const App = <AnimalsTable animals={animals} />;

root.render(App);