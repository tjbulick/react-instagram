export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3001';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}; Received ${res.status}`);
        }

        return await res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts');
        return res.map(this._transformPost);
    }

    _transformPost = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }
}