export const SORT_OPTIONS = [
    {key: 'BY_COMPLETION', description: 'By completion',   iteratees: ['completed'], orders: ['asc']},
    {key: 'BY_VALUE_ASC',  description: 'By value (asc)',  iteratees: ['value'],     orders: ['asc']},
    {key: 'BY_VALUE_DESC', description: 'By value (desc)', iteratees: ['value'],     orders: ['desc']},
];
export const FILTER_OPTIONS = [
    {key: 'COMPLETED_TASK',   description: 'Completed',   predicate: {completed: true}},
    {key: 'IN_PROGRESS_TASK', description: 'In progress', predicate: {completed: false}},
]