import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { SHORT_STORY_FANDUB_ON_PANDORA, SHORT_STORY_FANDUB_PLAYLIST } from '../constants';
import { TEMPORARY_REDIRECT } from '../util/redirects';

export const redirectToShortStoryFandubPlaylist = () => Response.redirect(SHORT_STORY_FANDUB_PLAYLIST);

export const handleShortStoriesFandub = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToShortStoryFandubPlaylist();
    const workParam = request.params.work;
    if (workParam === '') return redirectToShortStoryFandubPlaylist();
    switch (workParam.toLowerCase()) {
        case 'pandora':
        case 'on-pandora':
            return Response.redirect(SHORT_STORY_FANDUB_ON_PANDORA, TEMPORARY_REDIRECT);
        default:
            return redirectToShortStoryFandubPlaylist();
    }
};
