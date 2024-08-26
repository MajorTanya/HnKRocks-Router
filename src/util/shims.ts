import { SUBMISSION_LOGIN_URL } from '../constants';
import type { Shim } from '../types';

export const SHIMS = {
    CO_INTERVIEW: {
        OLD: '/other/(co-interview|current-obsession(-interview)?)',
        NEW: 'https://hnk.rocks/interviews/en/current-obsession'
    } as const satisfies Shim,
    LOGIN: {
        OLD: '/(submit|login.php)',
        NEW: SUBMISSION_LOGIN_URL
    } as const satisfies Shim,
    SAEGUSA: {
        OLD: '/saegusa(-sensei)?',
        NEW: 'https://hnk.rocks/other/saegusa'
    } as const satisfies Shim
} as const;
