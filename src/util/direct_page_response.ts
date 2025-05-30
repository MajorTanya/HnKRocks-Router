import { HNK_COLOURED_URL, HNK_MINIMALIST_URL, OEMBED_PAGE_DIRECT } from '../constants';
import type { DirectPageVariant } from '../types';

// we only check for a maximum of 5 versions of a chapter ([first upload] > v2 > v3 > v4 > v5 > give up)
const MAX_SUPPORTED_VERSION = 5 as const;

export const generateDirectPageResponse = async (
    chapterNo: number,
    pageNo: number,
    env: Env,
    variant: DirectPageVariant = undefined
): Promise<string | null> => {
    const correctedChapterNo = parseInt(`${chapterNo}`);
    const diff = chapterNo - correctedChapterNo;
    // handle decimal points padding, e.g. 21.5 -> 021.5, as otherwise, a 3 padding would change nothing
    // decimal point numbers are stored with zero padding in the beginning for consistency, but the string is longer
    const chapterPadded = `${correctedChapterNo}`.padStart(3, '0') + (diff === 0 ? '' : '.' + `${diff}`.split('.')[1]);
    const pagePadded = `${pageNo}`.padStart(3, '0');

    let pagePrefix: string;
    let pageUrl: string;
    let titleSuffix: string;
    let uploaderKey: string;
    if (variant === 'minimalist') {
        pagePrefix = '000-min/';
        pageUrl = HNK_MINIMALIST_URL;
        titleSuffix = ' (Minimalist Coloured)';
        uploaderKey = `min-${chapterNo}`;
    } else if (variant === 'coloured') {
        pagePrefix = '000-col/';
        pageUrl = HNK_COLOURED_URL;
        titleSuffix = ' (Coloured)';
        uploaderKey = `col-${chapterNo}`;
    } else {
        pagePrefix = '';
        pageUrl = `https://hnk.rocks/c/${chapterNo}/p/${pageNo}` as const;
        titleSuffix = '';
        uploaderKey = `${chapterNo}`;
    }

    const pageKey = `${pagePrefix}${chapterPadded}/p${pagePadded}`;

    let page = await getFromChapterPagesR2(env, pageKey);
    if (page == null) {
        for (let i = 2; i <= MAX_SUPPORTED_VERSION; i++) {
            page = await getFromChapterPagesR2(env, `${pageKey}_v${i}`);

            if (page != null) break;
        }
    }
    const key = page?.key;

    if (key == null) return null;

    const unsafeUploader = (await env.ChapterToUploader.get(uploaderKey)) || ('Unknown' as const);
    // silly workaround to avoid breaking the returned HTML for uploader with apostrophes in their name
    const uploader = unsafeUploader.replace("'", '’');
    const title = `Houseki no Kuni${titleSuffix}`;

    return `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Chapter ${chapterNo}, Page ${pageNo} of ${title} (by ${uploader} on MangaDex)</title>
        <meta name='twitter:card' content='summary_large_image'>
        <meta name='twitter:title' content='${title} - Chapter ${chapterNo}, Page ${pageNo}'>
        <meta name='twitter:description' content='${title} - Chapter ${chapterNo}, Page ${pageNo}\n(by ${uploader} on MangaDex)'>
        <meta name='twitter:image' content='https://pages.hnk.rocks/${key}'>
        <meta name='twitter:url' content='${pageUrl}'>
        <meta name='twitter:site' content='HnK.Rocks'>
        <link rel='alternate' type='application/json+oembed' href='https://hnk.rocks/oembed?embed_type=${OEMBED_PAGE_DIRECT}&format=json'>
        <meta http-equiv='Refresh' content='0; URL=${pageUrl}'>
    </head>`;
};

async function getFromChapterPagesR2(env: Env, key: string): Promise<R2ObjectBody | null> {
    return (await env.ChapterPages.get(`${key}.png`)) || (await env.ChapterPages.get(`${key}.jpg`));
}
