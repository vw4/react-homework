import {useState, useEffect} from "react";
import _ from 'lodash';

const useFilteredSortedList = (
    initialList = [],
    initialSorter = {iteratees: [], orders: []},
    initialFilters = [{}],
    initialSearch = '',
) => {
    const [list, setList] = useState(initialList);
    const [sorter, setSorter] = useState(initialSorter);
    const [filters, setFilters] = useState([{}]);
    const [search, setSearch] = useState(initialSearch);
    const [displayList, setDisplayList] = useState([]);

    const applySearch = (list, search) => {
        return list.filter(({value}) => value.toLowerCase().includes(search.toLowerCase()));
    }

    const applyFilters = (list, filters) => {
        return _.chain(filters)
            .map(filter => _.filter(list, filter))
            .flatten()
            .value();
    }

    const applySort = (list, sorter) => {
        return _.orderBy(list, sorter.iteratees, sorter.orders);
    }

    const getDisplayList =  (list, search, filters, sorter) => {
        const listAfterSearch = applySearch(list, search);
        const listAfterFilters = applyFilters(listAfterSearch, filters);
        return applySort(listAfterFilters, sorter);
    }

    useEffect(() => {
        const newDisplayList = getDisplayList(list, search, filters, sorter);
        setDisplayList(newDisplayList);
    }, [sorter, filters, search, list]);
    return [displayList, setList, setFilters, setSorter, setSearch];
};

export default useFilteredSortedList;