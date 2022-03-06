import { ShowEmoji } from "./ShowEmoji";

export const DescriptionItem = ({ emojis, setEmojis }) => {
  const handelChangeDescription = (e, index) => {
    let selectedemoji = e.target.value;

    let newEmojis = [...emojis];

    newEmojis[index].description = selectedemoji;
    setEmojis(newEmojis);
  };
  return (
    <>
      {emojis.map((emoji, index) => (
        <>
          {emoji.isSelected && (
            <div key={index}>
              <label htmlFor={emoji.title}>
                <ShowEmoji
                  src={emoji.src}
                  viewStyle="description"
                  name={emoji.title}
                />
              </label>
              <input
                type="text"
                id={emoji.title}
                onChange={(e) => handelChangeDescription(e, index)}
              />
            </div>
          )}
        </>
      ))}
    </>
  );
};
