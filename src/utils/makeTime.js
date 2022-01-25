import { format } from 'date-fns';

export const makeTime = () => format(new Date(), 'MMM dd, yyyy pp');