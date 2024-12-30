import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { EXTRA_PAGES_HOSTNAME } from '../constants';

export const handleExtraPages = async (request: IRequestStrict): Promise<Response> => {
    const clonedUrl = new URL(request.url);
    clonedUrl.hostname = EXTRA_PAGES_HOSTNAME;
    clonedUrl.protocol = 'https:';
    clonedUrl.port = '';
    const targetRequest = new Request(clonedUrl, {
        body: request.body,
        method: request.method,
        headers: request.headers
    });

    return fetch(targetRequest);
};
