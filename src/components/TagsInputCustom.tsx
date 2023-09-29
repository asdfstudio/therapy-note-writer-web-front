import './tagsInputCustom.css';
import { useState } from 'react';

const TagsInputCustom = ({
  tag_background,
  close_background,
  close_icon_color,
  placeholder_text,
}: {
  tag_background: string;
  close_background: string;
  close_icon_color: string;
  placeholder_text: string;
}) => {
  const [tags, setTags] = useState<string[]>([]);

  function handleKeyDown(e: any) {
    // If user did not press enter key, return
    if (e.key !== 'Enter') return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setTags([...tags, value]);
    // Clear the input
    e.target.value = '';
  }

  function removeTag(index: any) {
    setTags(tags.filter((el, i) => i !== index));
  }
  return (
    <div className='tags-input-container '>
      {tags.map((tag, index) => (
        <div
          className={`tag-item h-[1.625rem] 
          w-auto px-[0.5rem] ${tag_background}`}
          key={index}
        >
          <span className='text text-[0.75rem] font-iBM_Plex_Sans font-[400]'>
            {tag}
          </span>
          <span
            className={`close ${close_background} ${close_icon_color}`}
            onClick={() => removeTag(index)}
          >
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type='text'
        className='tags-input focus:outline-none '
        placeholder={`${placeholder_text}`}
      />
    </div>
  );
};

export default TagsInputCustom;
