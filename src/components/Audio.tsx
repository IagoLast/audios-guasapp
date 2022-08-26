import style from "./Audio.module.scss";

interface IAudioProps {
  title: string;
  duration: string;
  src: string;
}

export default function Audio(props: IAudioProps) {
  return (
    <article className={style.Audio}>
      <a href={props.src} className={style.Play}>
        ▶️
      </a>
      <span className={style.Title}> {props.title} </span>
      {/* <span className={style.Author}> {props.author} </span> */}
      <span className={style.Duration}> {props.duration} </span>
    </article>
  );
}
