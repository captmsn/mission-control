import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, List, Plus, Trash2, Search, Repeat, Shuffle, Heart, Star } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  thumbnail: string;
}

export const MusicDashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRepeatEnabled, setIsRepeatEnabled] = useState(false);
  const [isShuffleEnabled, setIsShuffleEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds
  const [currentTrack, setCurrentTrack] = useState<Track>({
    id: '1',
    title: 'No track playing',
    artist: 'Queue a song to start',
    duration: '0:00',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
  });

  const [queue, setQueue] = useState<Track[]>([]);
  const [favorites, setFavorites] = useState<Track[]>([
    {
      id: 'fav1',
      title: 'Favorite Track 1',
      artist: 'Artist 1',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
    },
    {
      id: 'fav2',
      title: 'Favorite Track 2',
      artist: 'Artist 2',
      duration: '4:20',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
    }
  ]);
  const [searchResults, setSearchResults] = useState<Track[]>([]);
  const [activeTab, setActiveTab] = useState<'queue' | 'favorites'>('queue');

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      setSearchResults([
        {
          id: 'result1',
          title: 'Sample Track 1',
          artist: 'Artist 1',
          duration: '3:45',
          thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
        },
        {
          id: 'result2',
          title: 'Sample Track 2',
          artist: 'Artist 2',
          duration: '4:20',
          thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
        }
      ]);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="pt-8 pb-12 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for songs..."
                className="w-full rounded-full bg-gray-800 pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {searchResults.length > 0 && (
              <div className="mt-2 max-w-xl mx-auto rounded-lg bg-gray-800 p-2">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/50 cursor-pointer"
                  >
                    <img
                      src={result.thumbnail}
                      alt={result.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white truncate">{result.title}</p>
                      <p className="text-gray-400 text-sm truncate">{result.artist}</p>
                    </div>
                    <button className="text-gray-400 hover:text-pink-500 transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Track */}
            <div className="lg:col-span-2 bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-6">
                <img
                  src={currentTrack.thumbnail}
                  alt="Album art"
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white mb-2">{currentTrack.title}</h3>
                    <button className="text-gray-400 hover:text-pink-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-400">{currentTrack.artist}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleTimeChange}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="mt-4 flex items-center justify-center space-x-4">
                    <button
                      onClick={() => setIsShuffleEnabled(!isShuffleEnabled)}
                      className={`text-gray-400 hover:text-white transition-colors ${
                        isShuffleEnabled ? 'text-pink-500' : ''
                      }`}
                    >
                      <Shuffle className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <SkipBack className="w-8 h-8" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-105 transition-transform"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <SkipForward className="w-8 h-8" />
                    </button>
                    <button
                      onClick={() => setIsRepeatEnabled(!isRepeatEnabled)}
                      className={`text-gray-400 hover:text-white transition-colors ${
                        isRepeatEnabled ? 'text-pink-500' : ''
                      }`}
                    >
                      <Repeat className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Volume Control */}
              <div className="mt-6 flex items-center space-x-4">
                <Volume2 className="text-gray-400 w-6 h-6" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500"
                />
                <span className="text-gray-400 min-w-[3ch]">{volume}%</span>
              </div>
            </div>

            {/* Queue and Favorites */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveTab('queue')}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors ${
                      activeTab === 'queue'
                        ? 'bg-pink-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span>Queue</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('favorites')}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors ${
                      activeTab === 'favorites'
                        ? 'bg-pink-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Star className="w-4 h-4" />
                    <span>Favorites</span>
                  </button>
                </div>
              </div>
              
              {activeTab === 'queue' && (
                <div>
                  {queue.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      <p>Queue is empty</p>
                      <p className="text-sm mt-2">Search for a song to add to the queue</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {queue.map((track) => (
                        <div
                          key={track.id}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/50"
                        >
                          <img
                            src={track.thumbnail}
                            alt={track.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-white truncate">{track.title}</p>
                            <p className="text-gray-400 text-sm truncate">{track.artist}</p>
                          </div>
                          <button className="text-gray-400 hover:text-pink-500 transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'favorites' && (
                <div>
                  {favorites.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      <p>No favorites yet</p>
                      <p className="text-sm mt-2">Click the heart icon to add songs to favorites</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {favorites.map((track) => (
                        <div
                          key={track.id}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/50"
                        >
                          <img
                            src={track.thumbnail}
                            alt={track.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-white truncate">{track.title}</p>
                            <p className="text-gray-400 text-sm truncate">{track.artist}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-pink-500 transition-colors">
                              <Play className="w-5 h-5" />
                            </button>
                            <button className="text-pink-500 hover:text-pink-600 transition-colors">
                              <Heart className="w-5 h-5 fill-current" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};