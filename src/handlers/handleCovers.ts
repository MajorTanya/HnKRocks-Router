import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { redirectToHnKTitlePage } from './handleChapters';
import { COVER_MAP, type CoverMapType, OEMBED_VOL_COVER } from '../constants';
import { VolumeCoverEntry } from '../types';

const volumeMapper = new Proxy(COVER_MAP as CoverMapType, {
    get: (target, prop: string) => (prop in target ? target[prop] : null)
});

const COVER_RESPONSE_TEMPLATE = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Volume VOLNUM cover</title>
        <meta property='og:title' content='Houseki no Kuni - Volume VOLNUM Cover'>
        <meta property='og:description' content='Cover of Houseki no Kuni Volume VOLNUM'>
        <meta property='og:url' content='WIKIURL'>
        <meta property='og:image' content='COVERLINK'>
        <meta property='og:site_name' content='HnK.Rocks'>
        <meta property='twitter:card' content='summary_large_image'>
        <meta property='twitter:title' content='Houseki no Kuni - Volume VOLNUM Cover'>
        <meta property='twitter:site' content='HnK.Rocks'>
        <link rel='alternate' type='application/json+oembed' href='https://hnk.rocks/oembed?embed_type=${OEMBED_VOL_COVER}&format=json'>
        <meta http-equiv='Refresh' content='0; URL=WIKIURL'>
    </head>` as const;

export const handleCovers = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const volNum = request.params.volNum;
    if (volNum === '') return redirectToHnKTitlePage();

    const volNumInt = parseInt(volNum, 10);
    if (Number.isNaN(volNumInt) || volNumInt < 1 || volNumInt > 13) return redirectToHnKTitlePage();

    const coverEntry: VolumeCoverEntry | null = volumeMapper[`${volNumInt}`];
    if (coverEntry == null) return redirectToHnKTitlePage();

    const paddedVolNum = `${volNumInt}`.padStart(2, '0');
    const body = COVER_RESPONSE_TEMPLATE.replaceAll('VOLNUM', paddedVolNum)
        .replaceAll('COVERLINK', coverEntry.cover)
        .replaceAll('WIKIURL', coverEntry.wiki);
    return new Response(body, {
        headers: { 'content-type': 'text/html;charset=UTF-8' }
    });
};
