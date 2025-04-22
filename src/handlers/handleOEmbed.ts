import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { DEFAULT_JSON_HEADERS, OEMBED_BASE_RESPONSE, OEMBED_PAGE_DIRECT, OEMBED_VOL_COVER } from '../constants';

type OEmbedProvider = { provider_name: string; provider_url: string } | Record<string, never>;

export const handleOEmbed = async (request: IRequestStrict): Promise<Response> => {
    const { embed_type = '' } = request.query;

    const embedType = `${embed_type}`.toLowerCase();
    let provider: OEmbedProvider = { provider_name: 'HnK.Rocks', provider_url: 'https://hnk.rocks/about' };

    if (embedType === OEMBED_PAGE_DIRECT) provider['provider_name'] = 'HnK.Rocks - Direct Page Embedding';
    else if (embedType === 'next') provider['provider_name'] = 'HnK.Rocks - Next Chapter Estimate';
    else if (embedType === 'since') provider['provider_name'] = 'HnK.Rocks - Time Since Last Chapter';
    else if (embedType === 'submission') provider['provider_name'] = 'HnK.Rocks - New Chapter Submission';
    else if (embedType === OEMBED_VOL_COVER) provider['provider_name'] = 'HnK.Rocks - Volume Covers';

    return new Response(JSON.stringify({ ...OEMBED_BASE_RESPONSE, ...provider }), DEFAULT_JSON_HEADERS);
};
