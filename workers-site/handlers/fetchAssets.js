import {getAssetFromKV, serveSinglePageApp} from "@cloudflare/kv-asset-handler";

const FetchAssets = async (request, event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }
    try {
        const asset = await getAssetFromKV(event, {mapRequestToAsset: serveSinglePageApp});
        return new Response(asset.body, { status: 200, headers });
    }
    catch (error) {
        return new Response('Error: ' + error, { status: 404, headers })
    }
}

export default FetchAssets
