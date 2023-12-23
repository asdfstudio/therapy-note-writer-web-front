import './tagsInputCustom.css';
import { useEffect, useState } from 'react';

const TagsInputCustom = ({
    tag_background,
    close_background,
    close_icon_color,
    placeholder_text,
    setFunc,
    currentTags,
}: {
    tag_background: string;
    close_background: string;
    close_icon_color: string;
    placeholder_text: string;
    setFunc: any;
    currentTags: any;
}) => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputSuggestion, setInputSuggestion] = useState('');

    useEffect(() => {
        setTags(currentTags);
    }, [currentTags]);

    function handleKeyDown(e: any) {
        // If user did not press enter key, return
        if (e.key !== 'Enter') return;
        // Get the value of the input
        const value = e.target.value;
        setInputSuggestion('');
        // If the value is empty, return
        if (!value.trim()) return;
        // Add the value to the tags array
        setTags([...tags, value]);
        setFunc([...tags, value]);
        // Clear the input
        e.target.value = '';
    }
    const handleChangeInput = (e: any) => {
        setInputSuggestion(e.target.value);
    };

    function removeTag(index: any) {
        setTags(tags.filter((el, i) => i !== index));
        setFunc(tags.filter((el, i) => i !== index));
    }

    return (
        <div>
            <div className='tags-input-container '>
                {tags.map((tag, index) => (
                    <div
                        className={`tag-item h-[1.625rem] 
              w-auto px-[0.5rem] ml-[0.5rem] ${tag_background}`}
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
                    onChange={handleChangeInput}
                    type='text'
                    className='tags-input focus:outline-none ml-[0.5rem]'
                    placeholder={`${placeholder_text}`}
                />
                {inputSuggestion !== '' ? (
                    <div
                        className='bg-[#3157C9] border-[#6F91F4] border-[1px] rounded-[0.25rem]
                drop-shadow-[0_10px_10px_rgba(18,25,46,0.50)]
                h-[3.3125rem] flex items-center w-[20.5rem] mt-[6rem]
                absolute z-[5]'
                    >
                        <p
                            className='font-iBM_Plex_Sans text-[0.9375rem] font-[400] text-[#fff]
                    opacity-[0.6] mr-1 ml-[0.8rem]'
                        >
                            Press enter to add
                        </p>
                        <p className='font-iBM_Plex_Sans text-[0.9375rem] font-[400] text-[#fff]'>
                            {`"${inputSuggestion}"`}
                        </p>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default TagsInputCustom;
