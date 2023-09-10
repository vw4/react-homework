import useLocalStorage from '../../hooks/useLocalStorage';
import {Grid, Paper} from "@mui/material";
import {FILTER_OPTIONS, SORT_OPTIONS} from '../../constants';
import SearchControl from "./SearchControl";
import FilterControl from "./FilterControl";
import SortControls from "./SortControls";
import {memo, useEffect} from "react";
import './index.css';
import ColorPicker from "./ColorPicker";

export default memo(function ListFilterControls({onFilters, onSorter, onSearch, onColorChange}) {
    const [filterKeys, setFilterKeys] = useLocalStorage('filters', FILTER_OPTIONS.map(f => f.key));
    const [sortKey, setSortKey] = useLocalStorage('sorter', SORT_OPTIONS[0].key);
    const [search, setSearch] = useLocalStorage('search', '');

    useEffect(() => {
        onFilters(FILTER_OPTIONS
            .filter(filterOptions => filterKeys.includes(filterOptions.key))
            .map(filterOptions => filterOptions.predicate)
        )
    }, [filterKeys]);
    useEffect(() => {
        const {iteratees, orders} = SORT_OPTIONS.find(sorterOptions => sorterOptions.key === sortKey);
        onSorter({iteratees, orders});
    }, [sortKey]);
    useEffect(() => onSearch(search), [search]);

    return <Paper>
        <Grid container spacing={2} className={'filter-control'}>
            <Grid item xs={4} className={'filter-control__item'}>
                <SortControls sorter={sortKey} setSorter={setSortKey}/>
            </Grid>
            <Grid item xs={4} className={'filter-control__item'}>
                <SearchControl search={search} setSearch={setSearch}/>
            </Grid>
            <Grid item xs={3} className={'filter-control__item'}>
                <FilterControl filters={filterKeys} setFilters={setFilterKeys}/>
            </Grid>
            <Grid item xs={1} className={'filter-control__item'}>
                <ColorPicker onColorChange={onColorChange}/>
            </Grid>
        </Grid>
    </Paper>;
})