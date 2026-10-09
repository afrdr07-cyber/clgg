import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CampusVideoPlayerProps {
  poster?: string;
  autoPlay?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
  onClose?: () => void;
}

export const CampusVideoPlayer: React.FC<CampusVideoPlayerProps> = ({
  poster = "/videos/poster.jpg",
  autoPlay = false,
  className = "",
  title = "PSVCET Autonomous Campus & Engineering Journey",
  subtitle = "Official Institutional Showcase • Krishnagiri, Tamil Nadu",
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [bufferedPercent, setBufferedPercent] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((err) => {
        console.warn("Video playback was blocked or interrupted:", err);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);

    if (videoRef.current.buffered.length > 0 && videoRef.current.duration > 0) {
      const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
      setBufferedPercent((bufferedEnd / videoRef.current.duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = volume > 0 ? volume : 0.7;
      setIsMuted(false);
      if (volume === 0) setVolume(0.7);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.warn("Exit fullscreen error:", err);
      });
    }
  };

  const changeSpeed = (speed: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement) && !isFullscreen) return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMute();
      } else if (e.code === 'KeyF') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.code === 'ArrowRight' && videoRef.current) {
        e.preventDefault();
        videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 5);
      } else if (e.code === 'ArrowLeft' && videoRef.current) {
        e.preventDefault();
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleMute, isFullscreen, duration]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      tabIndex={0}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={`relative w-full rounded-3xl overflow-hidden bg-black border border-[#CCD2DC] shadow-[0_20px_50px_rgba(24,28,33,0.14)] select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold ${className}`}
      aria-label="Campus Tour Video Player"
    >
      <div 
        className="relative w-full aspect-video cursor-pointer flex items-center justify-center bg-black overflow-hidden"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src="/videos/video-final.mp4"
          className="w-full h-full object-cover"
          poster={poster}
          preload="metadata"
          playsInline
          autoPlay={autoPlay}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onWaiting={() => setIsBuffering(true)}
          onPlaying={() => {
            setIsBuffering(false);
            setIsPlaying(true);
            setHasStarted(true);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            setShowControls(true);
          }}
        >
          <source src="/videos/video-final.mp4" type="video/mp4" />
          <source src="/video-final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/20 to-black/60 transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`} />

        <div className={`absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white pointer-events-none transition-opacity duration-300 z-20 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="space-y-0.5 max-w-xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-accent-gold text-primary font-label-eyebrow text-label-eyebrow font-bold uppercase tracking-wider shadow-xs">
                Official Video Tour
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wide border border-white/20">
                1080p FHD
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wide border border-white/20">
                Autonomous Campus
              </span>
            </div>
            <h3 className="font-headline-md text-base sm:text-xl font-bold tracking-tight text-white drop-shadow-md">
              {title}
            </h3>
            <p className="font-body-sm text-xs text-white/80 line-clamp-1 drop-shadow-xs">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            {onClose && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
                aria-label="Close Video Player"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            )}
            <div className="hidden sm:flex w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 items-center justify-center text-accent-gold">
              <span className="material-symbols-outlined text-[20px]">movie</span>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {(!isPlaying || isBuffering) && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute z-20 flex flex-col items-center gap-3 pointer-events-none"
            >
              {isBuffering ? (
                <div className="w-20 h-20 rounded-full bg-black/70 backdrop-blur-md border border-accent-gold flex items-center justify-center shadow-2xl">
                  <div className="w-10 h-10 border-3 border-accent-gold border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <div className="relative group/play">
                  <div className="absolute inset-0 rounded-full bg-accent-gold/40 animate-ping" />
                  
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-primary to-primary-container text-accent-gold border-2 border-accent-gold flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm group-hover/play:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[44px] sm:text-[52px] ml-1 text-white">
                      play_arrow
                    </span>
                  </div>
                </div>
              )}

              {!hasStarted && (
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/20 drop-shadow">
                  Click to Watch Campus Documentary
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div 
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 left-0 right-0 p-3 sm:p-5 z-20 space-y-2 text-white transition-all duration-300 ${
            showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="relative flex items-center group/scrub">
            <div className="w-full h-1.5 group-hover/scrub:h-2.5 bg-white/25 rounded-full overflow-hidden transition-all relative">
              <div 
                className="absolute top-0 left-0 bottom-0 bg-white/40 rounded-full transition-all duration-300"
                style={{ width: `${bufferedPercent}%` }}
              />
              <div 
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-accent-gold to-[#D4B86A] rounded-full transition-all shadow-[0_0_10px_#B49A59]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progressPercent || 0}
              onChange={handleSeek}
              aria-label="Seek video progress"
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-5 z-10"
            />
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-4 pt-1 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer border border-white/15"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <div className="flex items-center gap-2 group/volume">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer border border-white/15"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isMuted || volume === 0 ? 'volume_off' : volume < 0.5 ? 'volume_down' : 'volume_up'}
                  </span>
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume slider"
                  className="w-16 sm:w-20 h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-accent-gold hidden sm:inline-block"
                />
              </div>

              <div className="text-xs sm:text-sm font-medium text-white/90 font-mono flex items-center gap-1">
                <span>{formatTime(currentTime)}</span>
                <span className="text-white/50">/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1 p-0.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md">
                {[1, 1.25, 1.5].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => changeSpeed(speed)}
                    className={`px-2 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                      playbackSpeed === speed
                        ? 'bg-accent-gold text-primary font-bold shadow-xs'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>

              <button
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer border border-white/15"
              >
                <span className="material-symbols-outlined text-[22px]">
                  {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
