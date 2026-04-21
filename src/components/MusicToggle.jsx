import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import "./MusicToggle.css";

const MusicToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playerReady, setPlayerReady] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        const initializePlayer = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: 'iR3ssfhSyN4',
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    loop: 1,
                    playlist: 'iR3ssfhSyN4',
                    enablejsapi: 1,
                },
                events: {
                    onReady: (event) => {
                        console.log("YouTube player ready");
                        event.target.setVolume(70);
                        setPlayerReady(true);
                    },
                    onError: (error) => {
                        console.error("YouTube player error:", error);
                    }
                }
            });
        };

        // Check if API is already loaded
        if (window.YT && window.YT.Player) {
            initializePlayer();
        } else {
            // Load YouTube IFrame API
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            // Initialize player when API is ready
            window.onYouTubeIframeAPIReady = () => {
                initializePlayer();
            };
        }

        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (playerReady && playerRef.current) {
            if (isPlaying) {
                playerRef.current.playVideo();
                console.log("Playing video");
            } else {
                playerRef.current.pauseVideo();
                console.log("Pausing video");
            }
        }
    }, [isPlaying, playerReady]);

    return (
        <div className="music-toggle-wrapper">
            {/* Hidden YouTube player */}
            <div id="youtube-player" style={{ position: 'absolute', left: '-9999px' }}></div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
                disabled={!playerReady}
            >
                {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
                <span>Music {isPlaying ? 'ON' : 'OFF'}</span>
            </motion.button>
        </div>
    );
};

export default MusicToggle;
