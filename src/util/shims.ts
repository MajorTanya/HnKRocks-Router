import { SUBMISSION_LOGIN_URL } from '../constants';
import type { Shim } from '../types';

export const SHIMS = {
    LOGIN: {
        OLD: '/(submit|login.php)',
        NEW: SUBMISSION_LOGIN_URL
    } as const satisfies Shim,
    SAEGUSA: {
        OLD: '/saegusa(-sensei)?',
        NEW: 'https://hnk.rocks/other/saegusa'
    } as const satisfies Shim
} as const;
