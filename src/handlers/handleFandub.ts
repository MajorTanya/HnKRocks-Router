import type { IRequestStrict } from 'itty-router/Router';
import { FANDUB_EP_01, FANDUB_EP_02, FANDUB_PLAYLIST } from '../constants';

export const redirectToFandubPlaylist = () => Response.redirect(FANDUB_PLAYLIST);

export const handleFandubEpisodeNo = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToFandubPlaylist();
    const episodeParam = request.params.episodeNo;
    const parsed = parseInt(episodeParam);
    if (Number.isNaN(parsed)) return redirectToFandubPlaylist();

    switch (parsed) {
        case 1:
            return Response.redirect(FANDUB_EP_01);
        case 2:
            return Response.redirect(FANDUB_EP_02);
        default:
            return redirectToFandubPlaylist();
    }
};
