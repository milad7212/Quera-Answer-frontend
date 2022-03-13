import React from "react";
import Musics from "../data/Musics";
import Next from "../assets/next.svg";
import Prev from "../assets/prev.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";
import Progress from "../components/Progress";
import MusicTitle from "../components/MusicTitle";
import Button from "../components/Button";
import Container from "../components/Container";
import Audio from "../models/Audio";

const MusicPlayer = () => {
  const [state, setState] = React.useState({
    isPlaying: false,
    audios: Musics,
    nowMusic: Musics[0],
    progress: 0,
    duration: 0,
    // currentTime: 0,
    // isSeeking:false,
    // isEnded:false,

    /**
     * Define your state here
     */
  });
  // React.useEffect(() => {
  //   console.log("Audio :>> ", Audio.currentTime);
  //   if (state.isPlaying) {
  //     Audio.src = state.nowMusic.path;
  //     // console.log(Audio.src(state.nowMusic.path));
  //     Audio.play();

  //   } else {
  //     Audio.pause();
  //   }
  // }, [state]);

  const next = () => {
    // TODO Implement this function
    Audio.src = Musics[state.progress + 1];
    setState({
      ...state,
      progress: state.progress + 1,
      nowMusic: Musics[state.progress + 1],
    });
  };
  const prev = () => {
    // TODO Implement this function
    Audio.src = Musics[state.progress - 1];
    setState({
      ...state,
      progress: state.progress - 1,
      nowMusic: Musics[state.progress - 1],
    });
  };
  const play = () => {
    // TODO Implement this function
    console.log("Audio. :>> ", Audio);
    if (!state.isPlaying) {
      Audio.src = state.nowMusic.path;
      // console.log(Audio.src(state.nowMusic.path));
      Audio.play();
    } else {
      Audio.pause();
    }
    setState({ ...state, isPlaying: !state.isPlaying });

    // Audio(state.nowMusic.path()).play();
  };

  return (
    <Container>
      <MusicTitle title={state.nowMusic.name} />
      <Progress currentTime={Audio.currentTime * 100} />

      <div className="row justify-content-center">
        <Button
          data-testid="prev-btn"
          onClick={prev}
          src={Prev}
          disabled={state.progress == 0 ? true : false}
        />
        <Button
          data-testid="play-btn"
          onClick={play}
          src={state.isPlaying ? Pause : Play}
        />
        <Button
          data-testid="next-btn"
          onClick={next}
          disabled={state.progress == state.audios.length - 1 ? true : false}
          src={Next}
        />
      </div>
    </Container>
  );
};

export default MusicPlayer;