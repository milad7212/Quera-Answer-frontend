import { ShowEmoji } from "./ShowEmoji";

export const ShowPreviewEmoji = ({ emojis }) => {
  console.log('emojis', emojis)
  
  return (
    <>
      {emojis.map((emoji, index) => (
        <>
        {emoji.isSelected && 
        <>
          <ShowEmoji key={index} src={emoji.src} viewStyle='preview' name={emoji.title} />
          <div >{emoji.description}</div>
          </>
        }
        </>
      ))}
    </>
  );
};
