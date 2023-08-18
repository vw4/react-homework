const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const CARS = [
    {
        id: 1,
        brand: "Audi",
        models: [
            {
                id: 1,
                name: "A1",
                collection: [
                    {
                        id: 1,
                        version: "Sportback",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    },
                    {
                        id: 2,
                        version: "Citycarver",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    }
                ]
            },
            {
                id: 2,
                name: "Q5",
                collection: [
                    {
                        id: 1,
                        version: "FY 2021",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Sportback",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    }
                ]
            },
            {
                id: 3,
                name: "TT",
                collection: [
                    {
                        id: 1,
                        version: "Coupe",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Roadster",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        brand: "BMW",
        models: [
            {
                id: 1,
                name: "8 series",
                collection: [
                    {
                        id: 1,
                        version: "G1X LCI",
                        year: 2022,
                        horsepower: 333,
                        engine: 2998
                    },
                    {
                        id: 2,
                        version: "G1X",
                        year: 2019,
                        horsepower: 340,
                        engine: 2998
                    }
                ]
            },
            {
                id: 2,
                name: "X6",
                collection: [
                    {
                        id: 1,
                        version: "G06 LCI",
                        year: 2023,
                        horsepower: 530,
                        engine: 4395
                    },
                    {
                        id: 2,
                        version: "G06",
                        year: 2020,
                        horsepower: 286,
                        engine: 2993
                    }
                ]
            }
        ]
    },
];

const getCarsTable = (carsData) =>
    <table className={'car-specs-table'}>
        {carsData.map(getBrandSection)}
    </table>;

const getBrandSection = ({id, brand, models}) =>
    <tbody key={id}>
    <tr>
        <th className={'car-specs-table__brand-name'} colSpan={2}>{brand}</th>
    </tr>
    {models.map(getModelRows)}
    </tbody>;

const getSpecificationsRow = specs =>
    <tr key={specs.id}>
        <td>
            {getCarSpecificationsList(specs)}
        </td>
    </tr>;

const getModelRows = ({id: modelId, name: modelName, collection = []}) =>
    <React.Fragment key={modelId}>
        <tr key={collection.length ? collection[0].id : 0}>
            <th className={'car-specs-table__model-name'} rowSpan={collection.length || 1}>
                {modelName}
            </th>
            <td>
                {collection.length ? getCarSpecificationsList(collection.shift()) : ''}
            </td>
        </tr>
        {collection.map(getSpecificationsRow)}
    </React.Fragment>;

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getListItem = ([name, value]) => <li key={name}>{capitalize(name)}: {value}</li>;

const getCarSpecificationsList = (carSpecifications) =>
    <ul>
        {Object.entries(carSpecifications)
            .filter(([key]) => key !== 'id')
            .map(getListItem)
        }
    </ul>;

const app = <React.Fragment>
    <h1>Car Specs</h1>
    {getCarsTable(CARS)}
</React.Fragment>;

root.render(app);