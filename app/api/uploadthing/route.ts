import { createNextRouteHandler } from 'uploadthing/next'

import { ourFileRouter } from './core'
import { NextResponse } from 'next/server';
import { UTApi } from 'uploadthing/server';

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
    router: ourFileRouter,
})


export async function DELETE(request: Request) {
    const data = await request.json();
    const newUrl = data.url.substring(data.url.lastIndexOf("/") + 1);
    console.log('deleting : ',newUrl)

    const utapi = new UTApi(); 
    await utapi.deleteFiles(newUrl);

    return NextResponse.json({ message: "ok" });
}