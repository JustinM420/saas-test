import { Pinecone } from "@pinecone-database/pinecone";
import { getEmbeddings } from "./embeddings";

export async function getMatchesFromEmbeddings(embeddings: number[], filekey: string) {
    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_ENVIRONMENT!,
        environment: process.env.PINECONE_API_KEY!,
    })
    const index = await pinecone.Index('saas-test');

    try {
        const queryResult = await index.query({
                topK: 5,
                vector: embeddings,
                includeMetadata:true,
        })
        return queryResult.matches || []
    } catch (error) {
        console.log('error querying embeddings');
        throw error
    }
}


export async function getContext(query: string, fileKey: string) {
    const queryEmbeddings = await getEmbeddings(query)
    const matches = await getMatchesFromEmbeddings(queryEmbeddings, fileKey);

    const qualifyingDocs = matches.filter(
        (match) => match.score && match.score > .7
    );

    type Metadata = {
        text: string,
        pageNumber: number
    }

    let docs = qualifyingDocs.map(match => (match.metadata as Metadata).text);
    return docs.join('\n').substring(0, 3000);
}