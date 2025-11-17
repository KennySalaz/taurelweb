export interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

const INSTAGRAM_TOKEN = import.meta.env.VITE_INSTAGRAM_TOKEN;
const INSTAGRAM_USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID;

export const getInstagramPosts = async (limit: number = 3): Promise<InstagramPost[]> => {
  try {
    // Si no hay credenciales configuradas, devolver array vacío
    if (!INSTAGRAM_TOKEN || !INSTAGRAM_USER_ID) {
      console.warn('Instagram credentials not configured');
      return [];
    }

    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=${limit}&access_token=${INSTAGRAM_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching Instagram posts: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
};
