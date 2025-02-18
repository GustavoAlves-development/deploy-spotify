import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import {
  faBackward,
  faForward,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeSting) => {
  const splitArray = timeSting.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef();
  const progressbar = useRef();
  const [isplaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);
  const playPause = () => {
    isplaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isplaying);
    setCurrentTime(formatTime(audioPlayer.current.currentTime));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isplaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressbar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isplaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackward} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isplaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />
        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForward} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressbar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
