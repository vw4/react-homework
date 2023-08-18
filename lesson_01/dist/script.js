var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
    id: 1,
    brand: "Audi",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];

var getCarsTable = function getCarsTable(carsData) {
    return React.createElement(
        "table",
        { className: 'car-specs-table' },
        carsData.map(getBrandSection)
    );
};

var getBrandSection = function getBrandSection(_ref) {
    var id = _ref.id,
        brand = _ref.brand,
        models = _ref.models;
    return React.createElement(
        "tbody",
        { key: id },
        React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                { className: 'car-specs-table__brand-name', colSpan: 2 },
                brand
            )
        ),
        models.map(getModelRows)
    );
};

var getSpecificationsRow = function getSpecificationsRow(specs) {
    return React.createElement(
        "tr",
        { key: specs.id },
        React.createElement(
            "td",
            null,
            getCarSpecificationsList(specs)
        )
    );
};

var getModelRows = function getModelRows(_ref2) {
    var modelId = _ref2.id,
        modelName = _ref2.name,
        _ref2$collection = _ref2.collection,
        collection = _ref2$collection === undefined ? [] : _ref2$collection;
    return React.createElement(
        React.Fragment,
        { key: modelId },
        React.createElement(
            "tr",
            { key: collection.length ? collection[0].id : 0 },
            React.createElement(
                "th",
                { className: 'car-specs-table__model-name', rowSpan: collection.length || 1 },
                modelName
            ),
            React.createElement(
                "td",
                null,
                collection.length ? getCarSpecificationsList(collection.shift()) : ''
            )
        ),
        collection.map(getSpecificationsRow)
    );
};

var capitalize = function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var getListItem = function getListItem(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        name = _ref4[0],
        value = _ref4[1];

    return React.createElement(
        "li",
        { key: name },
        capitalize(name),
        ": ",
        value
    );
};

var getCarSpecificationsList = function getCarSpecificationsList(carSpecifications) {
    return React.createElement(
        "ul",
        null,
        Object.entries(carSpecifications).filter(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1),
                key = _ref6[0];

            return key !== 'id';
        }).map(getListItem)
    );
};

var app = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        null,
        "Car Specs"
    ),
    getCarsTable(CARS)
);

root.render(app);