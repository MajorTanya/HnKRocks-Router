import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import useReflare from 'reflare';

export const handleExtraPages = async (request: IRequestStrict): Promise<Response> => {
    const reflare = await useReflare();

    reflare.push({
        path: '/*',
        upstream: {
            domain: 'hnkrocks-extra-pages-9i8.pages.dev',
            protocol: 'https'
        }
    });

    return reflare.handle(request);
};
