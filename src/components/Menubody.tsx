'use client';
import './custom.css';
import React, { useContext, useEffect, useState } from 'react';
import TagsInputCustom from './TagsInputCustom';
import axios from 'axios';
import { Context } from '@/context/Context';

const Pronouns = [
    'She',
    'Her',
    'Hers',
    'He',
    'Him',
    'His',
    'They',
    'Them',
    'Theirs',
];
const AppointmentLocation = ['In person', 'Telehealth'];
const Diagnosis = ['In person', 'Telehealth'];
const Appearance = [
    'Well-groomed',
    'Disheveled',
    'Appropriate',
    'Inappropriate',
];
const Speech = [
    'Clear',
    'Soft',
    'Loud',
    'Pressured',
    'Slow',
    'Rapid',
    'Slurred',
];

const Affect = ['Appropriate', 'Blunted', 'Flat', 'Labile', 'Restricted'];

const Mood = [
    'Happy',
    'Sad',
    'Angry',
    'Irritable',
    'Euphoric',
    'Anxious',
    'Depressed',
];

const Behavior = [
    'Cooperative',
    'Uncooperative',
    'Agitated',
    'Calm',
    'Disruptive',
];

const Delusions = [
    'None',
    'Persecutory',
    'Grandiose',
    'Somatic',
    'Erotomanic',
    'Nihilistic',
];

const SuicidalIdeation = ['None', 'Passive', 'Active', 'Plan', 'Intent'];
const HomicidalIdeation = ['None', 'Passive', 'Active', 'Plan', 'Intent'];

const Self_Injuring_Behavior = [
    'None',
    'Scratching',
    'Cutting',
    'Burning',
    'Biting',
    'Other',
];

const Insight = ['Good', 'Fair', 'Poor', 'None'];
const Judgment = ['Good', 'Fair', 'Poor', 'None'];
const Oriented = ['Oriented x3', 'Confused', 'Disoriented'];
const EyeContact = ['Good', 'Fair', 'Poor', 'None'];

const Menubody = ({
    setMainSummary,
    setShowSubscriptionTable,
    clicksUsed,
    totalClick,
    setGenerateLoading,
    setShowTermsOfServicePop,
    setShowSendFeedbackPop,
    updateTrackButtonCLick,
}: {
    setMainSummary: any;
    setShowSubscriptionTable: any;
    clicksUsed: any;
    totalClick: any;
    setGenerateLoading: any;
    setShowTermsOfServicePop: any;
    setShowSendFeedbackPop: any;
    updateTrackButtonCLick: any;
}) => {
    const [clientPronouns, setClientPronouns] = useState<any>([]);
    const [apptLocation, setApptLocation] = useState<any>('');
    const [diagnosis, setDiagnosis] = useState<any>([]);
    const [currentSymptoms, setCurrentSymptoms] = useState<any>('');
    const [discussed, setDiscussed] = useState<any>('');
    const [interventions, setInterventions] = useState<any>([]);
    const [appearance, setAppearance] = useState<any>([]);
    const [speech, setSpeech] = useState<any>([]);
    const [affect, setAffect] = useState<any>([]);
    const [mood, setMood] = useState<any>([]);
    const [behavior, setBehavior] = useState<any>([]);
    const [delusion, setDelusion] = useState<any>([]);
    const [suicidal, setSuicidal] = useState<any>([]);
    const [homicidal, setHomicidal] = useState<any>([]);
    const [selfInjury, setSelfInjury] = useState<any>([]);
    const [insight, setInsight] = useState<any>([]);
    const [judgment, setJudgment] = useState<any>([]);
    const [oriented, setOriented] = useState<any>([]);
    const [eyeContact, setEyeContact] = useState<any>([]);
    const [homework, setHomework] = useState<any>('');
    const [nextAppt, setNextAppt] = useState<any>('');
    const [summary, setSummary] = useState('');
    const [isGenerateButtonDisabled, setIsGenerateButtonDisabled] =
        useState(false);

    const { user } = useContext<any>(Context);

    useEffect(() => {
        const local_clientPronouns = JSON.parse(
            localStorage.getItem('LOCAL_clientPronouns')!
        );
        if (local_clientPronouns) setClientPronouns(local_clientPronouns);

        const local_apptLocation = localStorage.getItem('LOCAL_apptLocation');
        if (local_apptLocation) setApptLocation(local_apptLocation);

        const local_diagnosis = JSON.parse(
            localStorage.getItem('LOCAL_diagnosis')!
        );
        if (local_diagnosis) setDiagnosis(local_diagnosis);

        const local_currentSymptoms = localStorage.getItem(
            'LOCAL_currentSymptoms'
        );
        if (local_currentSymptoms) setCurrentSymptoms(local_currentSymptoms);
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'LOCAL_clientPronouns',
            JSON.stringify(clientPronouns)
        );
        localStorage.setItem('LOCAL_apptLocation', apptLocation);

        // localStorage.setItem('LOCAL_diagnosis', diagnosis);
        localStorage.setItem('LOCAL_diagnosis', JSON.stringify(diagnosis));

        localStorage.setItem('LOCAL_currentSymptoms', currentSymptoms);
        // localStorage.setItem(
        //     'LOCAL_currentSymptoms',
        //     JSON.stringify(currentSymptoms)
        // );

        localStorage.setItem('LOCAL_discussed', discussed);
        localStorage.setItem(
            'LOCAL_interventions',
            JSON.stringify(interventions)
        );
        localStorage.setItem('LOCAL_appearance', JSON.stringify(appearance));
        localStorage.setItem('LOCAL_speech', JSON.stringify(speech));
        localStorage.setItem('LOCAL_affect', JSON.stringify(affect));
        localStorage.setItem('LOCAL_mood', JSON.stringify(mood));
        localStorage.setItem('LOCAL_behavior', JSON.stringify(behavior));
        localStorage.setItem('LOCAL_delusion', JSON.stringify(delusion));
        localStorage.setItem('LOCAL_suicidal', JSON.stringify(suicidal));
        localStorage.setItem('LOCAL_homicidal', JSON.stringify(homicidal));
        localStorage.setItem('LOCAL_selfInjury', JSON.stringify(selfInjury));
        localStorage.setItem('LOCAL_insight', JSON.stringify(insight));
        localStorage.setItem('LOCAL_judgment', JSON.stringify(judgment));
        localStorage.setItem('LOCAL_oriented', JSON.stringify(oriented));
        localStorage.setItem('LOCAL_eyeContact', JSON.stringify(eyeContact));
        localStorage.setItem('LOCAL_homework', homework);
        localStorage.setItem('LOCAL_nextAppt', nextAppt);
    }, [
        affect,
        appearance,
        apptLocation,
        behavior,
        clientPronouns,
        currentSymptoms,
        delusion,
        diagnosis,
        discussed,
        eyeContact,
        homework,
        homicidal,
        insight,
        interventions,
        judgment,
        mood,
        nextAppt,
        oriented,
        selfInjury,
        speech,
        suicidal,
    ]);

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const getValue = (label: any, value: any) => {
        if (Array.isArray(value)) {
            return value.length > 0 ? `${label}: ${value.join(', ')}` : '';
        } else {
            return value !== null && value !== '' ? `${label}: ${value}` : '';
        }
    };

    const newSummary = [
        getValue('Client Pronouns', clientPronouns),
        getValue('Appointment Location', apptLocation),
        getValue('Diagnosis', diagnosis),
        getValue('Current Symptoms', currentSymptoms),
        getValue('Discussed', discussed),
        getValue('Interventions', interventions),
        getValue('Appearance', appearance),
        getValue('Speech', speech),
        getValue('Affect', affect),
        getValue('Mood', mood),
        getValue('Behavior', behavior),
        getValue('Delusions', delusion),
        getValue('Suicidal Ideation', suicidal),
        getValue('Homicidal Ideation', homicidal),
        getValue('Self-Injuring Behavior', selfInjury),
        getValue('Insight', insight),
        getValue('Judgment', judgment),
        getValue('Oriented', oriented),
        getValue('Eye Contact', eyeContact),
        getValue('Homework', homework),
        getValue('Next Appointment Date', nextAppt),
    ]
        .filter((line) => line)
        .join('\n');

    const prompt = `Please write a therapy note based on the following session information:\n${newSummary}`;

    const handleSubmit = async () => {
        if (clicksUsed === totalClick) {
            setShowSubscriptionTable(true);
        } else {
            setGenerateLoading(true);
            await axios
                .post(`${baseURL}/api/openai/summary`, {
                    prompt: prompt,
                }) // Update this line
                .then((response) => {
                    // Extract the data from the server response
                    const note = response.data.note; // or .paragraph, depending on which API you're calling
                    // Update the state of summary
                    setSummary(note);
                    setMainSummary(note);
                    setGenerateLoading(false);
                })
                .catch((error) => {
                    console.error(`Failed to generate therapy note: ${error}`);
                    setSummary(
                        'Unable to generate therapy note. Please try again later.'
                    );
                });

            const email = user.user.email || '';
            const today = new Date();
            const month = `${today.getMonth()}/${today.getFullYear()}`;

            await axios
                .post(`${baseURL}/api/auth/click`, {
                    email: email,
                    month: month,
                })
                .then((response) => {
                    // Extract the data from the server response
                    const clickData = response.data.note;
                })
                .catch((error) => {
                    console.error(`Failed to keep click count: ${error}`);
                });

            // Update button click number to run the useEffect for updating click data
            updateTrackButtonCLick();
        }
    };

    return (
        <div
            className='bg-[#12192E] w-screen h-screen 
            md:w-[23.75rem]
            text-[#fff] font-iBM_Plex_Sans
            fixed flex flex-col top-[4.75rem] pt-[1.25rem] z-20
            overflow-y-scroll'
        >
            <div
                className='ml-[1.25rem] mr-[1.1rem]
        flex flex-col justify-center mb-[7rem] 
        md:w-[20.75rem] md:mr-0 '
            >
                <p
                    className='font-[700]
          text-[0.9375rem] mb-[1.25rem]'
                >
                    Session Description
                </p>

                {/* Options Start */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Pronouns
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 gap-[0.5rem]'
                >
                    {Pronouns.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                                rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Pronouns'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (
                                            clientPronouns.includes(
                                                currentValue
                                            )
                                        ) {
                                            const tempArray = clientPronouns;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setClientPronouns(tempArray);
                                        } else {
                                            setClientPronouns(
                                                (prevValue: any) => [
                                                    ...prevValue,
                                                    event.target.value,
                                                ]
                                            );
                                        }
                                    }}
                                />
                                {item}
                                <span className='checkmark'></span>
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Appointment Location
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-4
                    md:grid-cols-2'
                >
                    {AppointmentLocation.map((item, index) => {
                        return (
                            <label
                                className='text-[0.9375rem] 
                                mr-[1.5rem] mb-[0.5rem] 
                                border-[0.518px] border-[rgba(111,145,244,0.50)]
                                rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.4rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                {item}
                                <input
                                    type='radio'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Appointment Location'
                                    checked={
                                        item === apptLocation ? true : false
                                    }
                                    className='checkbox appearance-none 
                                    ring-[#F4776F] ring-[1.5px] 
                                    checked:ring-[4px] checked:ring-[#F4776F]
                                    ring-inset rounded-full
                                    cursor-pointer 
                                    w-[1rem] h-[1rem] ml-[2rem]'
                                    onChange={(event) => {
                                        setApptLocation(event.target.value);
                                    }}
                                />
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Diagnosis
                </p>

                <div
                    className=' bg-transparent
        rounded-[0.25888rem] p-[0.62rem]
        w-full mb-[1.25rem]
        border-[0.518px] 
        border-[rgba(111,145,244,0.50)] flex flex-wrap
        focus:border-[#6F91F4]'
                >
                    <TagsInputCustom
                        tag_background='bg-[#C24545]'
                        close_background='bg-[#FFF2EE]'
                        close_icon_color='text-[#6F91F4]'
                        placeholder_text='Write diagnosis...'
                        setFunc={setDiagnosis}
                        currentTags={diagnosis}
                    />
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Current Symptoms
                </p>

                <input
                    placeholder='Write symptoms...'
                    id='symptoms'
                    name='current_symptoms'
                    value={currentSymptoms}
                    onChange={(event) => {
                        setCurrentSymptoms(event.target.value);
                    }}
                    className=' bg-transparent
            rounded-[0.25888rem] p-[0.62rem]
            w-full h-auto mb-[1.25rem]
            border-[0.518px] border-[rgba(111,145,244,0.50)] 
            resize-y focus:outline-none
            focus:border-[#6F91F4]'
                />

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    What was discussed in session
                </p>
                <textarea
                    placeholder='Write discussion...'
                    id='discussion'
                    name='discussion'
                    onChange={(event) => {
                        setDiscussed(event.target.value);
                    }}
                    className=' bg-transparent
            rounded-[0.25888rem] p-[0.62rem]
            w-full h-auto mb-[1.25rem]
            border-[0.518px] border-[rgba(111,145,244,0.50)] 
            resize-y focus:outline-none
            focus:border-[#6F91F4]'
                />

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Interventions used
                </p>

                <div
                    className=' bg-transparent
        rounded-[0.25888rem] p-[0.62rem]
        w-full mb-[1.25rem]
        border-[0.518px] 
        border-[rgba(111,145,244,0.50)] flex flex-wrap'
                >
                    <TagsInputCustom
                        tag_background='bg-[#6F91F4]'
                        close_background='bg-[#2048BE]'
                        close_icon_color='text-[#6F91F4]'
                        placeholder_text='Write interventions...'
                        setFunc={setInterventions}
                        currentTags={interventions}
                    />
                </div>

                {/* Mental Status Exam */}

                <p
                    className='font-[700]
          text-[0.9375rem] mb-[1.25rem]'
                >
                    Mental Status Exam
                </p>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Appearance
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Appearance.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Appearance'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (appearance.includes(currentValue)) {
                                            const tempArray = appearance;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setAppearance(tempArray);
                                        } else {
                                            setAppearance((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Speech
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Speech.map((item, index) => {
                        return (
                            <label
                                key={index}
                                // htmlFor={`${item}${index}`}
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                                rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                            >
                                <input
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Speech'
                                    type='checkbox'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (speech.includes(currentValue)) {
                                            const tempArray = speech;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setSpeech(tempArray);
                                        } else {
                                            setSpeech((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Affect
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Affect.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Affect'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (affect.includes(currentValue)) {
                                            const tempArray = affect;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setAffect(tempArray);
                                        } else {
                                            setAffect((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Mood
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Mood.map((item, index) => {
                        return (
                            <label
                                key={index}
                                // htmlFor={`${item}${index}`}
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                                rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                            >
                                <input
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Mood'
                                    type='checkbox'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (mood.includes(currentValue)) {
                                            const tempArray = mood;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setMood(tempArray);
                                        } else {
                                            setMood((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Behavior
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Behavior.map((item, index) => {
                        return (
                            <label
                                key={index}
                                // htmlFor={`${item}${index}`}
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                                rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                            >
                                <input
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Behavior'
                                    type='checkbox'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (behavior.includes(currentValue)) {
                                            const tempArray = behavior;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setBehavior(tempArray);
                                        } else {
                                            setBehavior((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Delusions
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Delusions.map((item, index) => {
                        return (
                            <label
                                key={index}
                                // htmlFor={`${item}${index}`}
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                                rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                            >
                                <input
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Delusions'
                                    type='checkbox'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (delusion.includes(currentValue)) {
                                            const tempArray = delusion;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setDelusion(tempArray);
                                        } else {
                                            setDelusion((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Suicidal Ideation
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {SuicidalIdeation.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Suicidal_Ideation'
                                    className='checkbox appearance-none 
                                    ring-[#F4776F] ring-[1.5px] 
                                    checked:ring-[4px] checked:ring-[#F4776F]
                                    ring-inset rounded-full
                                    cursor-pointer 
                                    w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (suicidal.includes(currentValue)) {
                                            const tempArray = suicidal;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setSuicidal(tempArray);
                                        } else {
                                            setSuicidal((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Homicidal Ideation
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {HomicidalIdeation.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Homicidal_Ideation'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (homicidal.includes(currentValue)) {
                                            const tempArray = homicidal;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setHomicidal(tempArray);
                                        } else {
                                            setHomicidal((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Self-Injuring Behavior
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Self_Injuring_Behavior.map((item, index) => {
                        return (
                            <label
                                key={index}
                                // htmlFor={`${item}${index}`}
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                                rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                            >
                                <input
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Self Injuring Behavior'
                                    type='checkbox'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (selfInjury.includes(currentValue)) {
                                            const tempArray = selfInjury;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setSelfInjury(tempArray);
                                        } else {
                                            setSelfInjury((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Insight
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Insight.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Insight'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (insight.includes(currentValue)) {
                                            const tempArray = insight;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setInsight(tempArray);
                                        } else {
                                            setInsight((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Judgment
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Judgment.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Judgment'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (judgment.includes(currentValue)) {
                                            const tempArray = judgment;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setJudgment(tempArray);
                                        } else {
                                            setJudgment((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Oriented
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {Oriented.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='Oriented'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (oriented.includes(currentValue)) {
                                            const tempArray = oriented;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setOriented(tempArray);
                                        } else {
                                            setOriented((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Eye Contact
                </p>
                <div
                    className='w-full mb-[1.25rem] grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-3 xl:grid-cols-2 gap-[0.5rem]'
                >
                    {EyeContact.map((item, index) => {
                        return (
                            <label
                                className='container border-[0.518px] border-[rgba(111,145,244,0.50)]
                            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem] pb-[0.2rem]'
                                key={index}
                                // htmlFor={`${item}${index}`}
                            >
                                <input
                                    type='checkbox'
                                    value={item}
                                    id={`${item}${index}`}
                                    name='EyeContact'
                                    onChange={(event) => {
                                        const currentValue = event.target.value;
                                        if (eyeContact.includes(currentValue)) {
                                            const tempArray = eyeContact;
                                            const index =
                                                tempArray.indexOf(currentValue);
                                            tempArray.splice(index, 1);
                                            setEyeContact(tempArray);
                                        } else {
                                            setEyeContact((prevValue: any) => [
                                                ...prevValue,
                                                event.target.value,
                                            ]);
                                        }
                                    }}
                                />
                                <span className='checkmark ml-[3.3rem]'></span>
                                {item}
                            </label>
                        );
                    })}
                </div>

                {/* Plan */}

                <p
                    className='font-[600]
                    text-[0.9375rem] mb-[1.25rem]'
                >
                    Plan
                </p>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Homework
                </p>
                <div className=''>
                    <textarea
                        placeholder='Write homework...'
                        id='Homework'
                        name='Homework'
                        onChange={(event) => {
                            setHomework(event.target.value);
                        }}
                        className='bg-transparent
                        rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem]
                        w-full mb-[1.25rem]
                        border-[0.518px] border-[rgba(111,145,244,0.50)] h-[9rem] 
                        resize-y focus:outline-none
                        focus:border-[#6F91F4]'
                    />
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Plan for next session
                </p>
                <div className=''>
                    <textarea
                        placeholder='Write plan...'
                        id='Homework'
                        name='Homework'
                        onChange={(event) => {
                            setHomework(event.target.value);
                        }}
                        className='bg-transparent
                        rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem]
                        w-full mb-[1.25rem]
                        border-[0.518px] border-[rgba(111,145,244,0.50)] h-[9rem] 
                        resize-y focus:outline-none
                        focus:border-[#6F91F4]'
                    />
                </div>

                {/* Options */}
                <p
                    className=' opacity-[0.6] font-[400]
                    text-[0.9375rem] mb-[0.5rem]'
                >
                    Next appointment date
                </p>
                <input
                    type='date'
                    placeholder='Select Date'
                    id='option_1'
                    name='pronouns'
                    onChange={(event) => {
                        setNextAppt(event.target.value);
                    }}
                    className='bg-transparent
            rounded-[0.25888rem] px-[0.62rem] pt-[0.62rem]
            w-full mb-[1.25rem] pb-2
            border-[0.518px] border-[rgba(111,145,244,0.50)] 
            focus:outline-none
            focus:border-[#6F91F4]'
                />
                <div>
                    {/* <Link
                        href='/dashboard'
                        className='w-[17rem] mt-10 
          xlc:mb-10'
                    > */}
                    <div
                        className='w-full mt-2 
                        xlc:mb-10 '
                    >
                        <button
                            onClick={handleSubmit}
                            // disabled={isGenerateButtonDisabled}
                            className='flex bg-[#6F91F4] py-[12px] 
                            w-full rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            text-[1rem] font-[600] justify-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                        >
                            Generate
                        </button>
                    </div>
                    {/* </Link> */}
                </div>

                <div className='h-[2px] w-full bg-[rgba(111,145,244,0.50)] mb-5'></div>

                <div
                    className='flex text-[#6F91F4] text-[0.875rem] font-iBM_Plex_Sans font-[600] 
                    tracking-[0.0875rem] uppercase gap-[2.5rem] items-center justify-center
                    cursor-pointer'
                >
                    <p
                        onClick={() => {
                            setShowTermsOfServicePop(true);
                        }}
                    >
                        terms of servcie
                    </p>
                    <p
                        onClick={() => {
                            setShowSendFeedbackPop(true);
                        }}
                    >
                        Send feedback
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Menubody;
