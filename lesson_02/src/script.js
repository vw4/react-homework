const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`},
];
const ROLL_DELAY_MS = 2 * 1000;

class Animal extends React.Component {
    getClassName() {
        const {isActive = false} = this.props;
        const classNames = ['list__animal'];
        if (isActive) {
            classNames.push('list__animal--active');
        }
        return classNames.join(' ');
    }

    render() {
        const {icon = '', type = ''} = this.props;
        return <tr className={this.getClassName()}>
            <td>{icon}</td>
            <td>{type}</td>
        </tr>;
    }
}

class AnimalsTable extends React.Component {
    state = {
        inactiveAnimalsIndexes: (this.props.animals || [])
            .map((animal, index) => index)
            .sort(() => Math.random() - 0.5),
    }

    hasAnimals() {
        const {animals} = this.props;
        return !!animals && !!animals.length;
    }

    isAnimalActive(animalIndex) {
        return !this.state.inactiveAnimalsIndexes.includes(animalIndex);
    }

    isAllAnimalsActivated() {
        return !this.state.inactiveAnimalsIndexes.length;
    }

    componentDidMount() {
        if (!this.hasAnimals()) {
            return;
        }
        this.intervalId = setInterval(() => this.activateRandomAnimal(), ROLL_DELAY_MS);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    activateRandomAnimal() {
        this.setState(
            {inactiveAnimalsIndexes: this.state.inactiveAnimalsIndexes.slice(1)},
            () => this.onAnimalActivated()
        );
    }

    onAnimalActivated() {
        if (this.isAllAnimalsActivated()) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    getClassName() {
        const {animals} = this.props;
        const {inactiveAnimalsIndexes} = this.state;
        const classNames = ['list'];
        if (this.isAllAnimalsActivated()) {
            classNames.push('list--full');
        } else if (inactiveAnimalsIndexes.length <= animals.length / 2) {
            classNames.push('list--half-full');
        }
        return classNames.join(' ');
    }

    render() {
        if (!this.hasAnimals()) {
            return null;
        }

        const getAnimalRow = (animal, index) =>
            <Animal
                key={index}
                type={animal.type}
                icon={animal.icon}
                isActive={this.isAnimalActive(index)}
            />;

        return <table className={this.getClassName()}>
            <tbody>
                {animals.map(getAnimalRow)}
            </tbody>
        </table>;
    }
}

const App = <AnimalsTable animals={animals} />;

root.render(App);