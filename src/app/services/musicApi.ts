const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://tunecent.fabian.web.id/api/v1";

export interface MusicData {
  id: number;
  token_id: number;
  creator_address: string;
  title: string;
  artist: string;
  genre: string;
  description: string;
  ipfs_cid: string;
  fingerprint_hash: string;
  audio_file_url: string;
  cover_image_url: string;
  duration: number;
  is_active: boolean;
  tx_hash: string;
  registered_at: string;
  play_count: number;
  view_count: number;
  listener_count: number;
  viral_score: number;
  trending_rank: number;
  created_at: string;
  updated_at: string;
}

export interface MusicListResponse {
  data: MusicData[];
  total: number;
  limit: number;
  offset: number;
}

export interface ListMusicParams {
  limit?: number;
  offset?: number;
  creator?: string;
}

/**
 * Fetch list of music from the backend API
 */
export async function listMusic(params?: ListMusicParams): Promise<MusicListResponse> {
  const queryParams = new URLSearchParams();

  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.offset) queryParams.append("offset", params.offset.toString());
  if (params?.creator) queryParams.append("creator", params.creator);

  const url = `${API_BASE_URL}/music/?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      cache: 'no-store', // Disable caching for fresh data
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => response.statusText);
      throw new Error(`Failed to fetch music: ${response.status} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Music API error:', error);
    throw error;
  }
}

/**
 * Fetch a single music track by token ID
 */
export async function getMusic(tokenId: number): Promise<MusicData> {
  const url = `${API_BASE_URL}/music/${tokenId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch music: ${response.statusText}`);
  }

  return response.json();
}

export interface ArtistLeaderboardData {
  rank: number;
  wallet_address: string;
  display_name: string;
  tier: string;
  is_verified: boolean;
  total_works: number;
  total_earnings: string;
  total_campaigns: number;
  score: number;
}

export interface ArtistLeaderboardResponse {
  leaderboard: ArtistLeaderboardData[];
  total: number;
}

export interface TopArtistsParams {
  limit?: number;
}

/**
 * Fetch top artists leaderboard
 */
export async function getTopArtists(params?: TopArtistsParams): Promise<ArtistLeaderboardResponse> {
  const queryParams = new URLSearchParams();

  if (params?.limit) queryParams.append("limit", params.limit.toString());

  const url = `${API_BASE_URL}/leaderboard/top-artists?${queryParams.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch top artists: ${response.statusText}`);
  }

  return response.json();
}
