"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import getQuestionsById, { Question, allQuestions, questionsByRegion } from '../../../utils/allQuestions';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useForm, Controller, set } from 'react-hook-form';
import { RegionsData } from '@/constants/regions';
import Image from "next/image";
import { mapResults } from '@/utils/mapResults';

const transformData = (data: any, id: string) => {
    const result = {};
    const sortedData = {} as any;
    questionsByRegion[id].forEach((id: any) => {
        sortedData[id] = data[id];
    });
    for (const key in sortedData) {
        if (Object.hasOwnProperty.call(sortedData, key)) {
            const value = sortedData[key];
            let count = allQuestions.find(question => question.id === key).choices.length;
            const index = allQuestions.find(question => question.id === key).choices.findIndex((choice: any) => choice.id === value);
            result[key] = { count, value: index + 1 };
        }
    }
    return result;
}

const QuestionsForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
      } = useForm()
    const { id } = useParams()
    const [result, setResult] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [disabled, setDisabled] = useState({})
    const questions = getQuestionsById(id as string)

    const onSubmit = (data: any) => {
        const newData = transformData(data, id as string)
        fetch(`http://localhost:5000/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            data: {
                ...newData,
            },
            region: id,
            })
        }).then((response) => response.json())
          .then((data) => {
            setResult(data)
            setLoading(false)
        });
    }
    
    const titleName = RegionsData.find(region => region.id === id)?.name

    const handleClick = (id: string, choiceId: string) => {
        if (id === 'Overnight' && choiceId === 'noNeed') {
            setValue('Night', 'noNeed', { shouldValidate: true })
            setValue('Stay', 'noNeed', { shouldValidate: true })
            setValue('Budget_Stay', 'noNeed', { shouldValidate: true })
            setDisabled({
                Night: true,
                Stay: true,
                Budget_Stay: true
            })
        }
        if (id === 'Overnight' && choiceId !== 'noNeed') {
            setValue('Night', '', { shouldValidate: true })
            setValue('Stay', '', { shouldValidate: true })
            setValue('Budget_Stay', '', { shouldValidate: true })
            setDisabled({
                Night: false,
                Stay: false,
                Budget_Stay: false
            })
        }
    }

    const topFunction = () => {
        setLoading(true)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <> 
            {loading && <div className="m-10 flex justify-center align-center"><SpinnerImage /></div>}

            <>
                {result?.results
                    ? 
                    <>
                        <div className="flex flex-row flex-wrap md:basis-1/2 lg:basis-1/3 w-full items-center pt-6">
                            {
                                result?.results.map((item: any, index: number) => {
                                    const fileName = item.trim()
                                    const name = mapResults[fileName]
                                    return (
                                        <div className="w-full md:w-1/2 lg:w-[33%] rounded-xl p-2 pb-4">
                                            <Image
                                                src={`/images/${fileName}.jpg`}
                                                className="w-full object-cover h-[300px] rounded-xl shadow-md"
                                                alt=""
                                                width={1920}
                                                height={505}
                                            />
                                            <div className="text-2xl text-center mt-4">อันดับ {index+1}. {name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex justify-center align-center mb-8">
                            <Link href="/">
                                <Button variant="ghost" className="bg-[#2A230E] opacity-[50%] text-white">กลับหน้าหลัก</Button>
                            </Link>
                        </div>
                    </>
                    :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-8">
                            <div className="text-4xl font-bold mb-4">{titleName}</div>
                            <div className="text-xl">กรุณาตอบคำถามให้ตรงกับความต้องการของคุณ</div>
                            <div className="mt-4">
                                {questions.length > 0 &&
                                    questions.map((question: Question | undefined, index: number) => (
                                        <div key={question?.id} className="pb-8">
                                            <div className="pb-2">
                                                {index + 1}. {question?.question}
                                            </div>
                                            <div className="ml-2">
                                            {question?.type === 'dropdown' && (
                                                <Controller
                                                    name={question.id}
                                                    control={control}
                                                    rules={{ required: true }}
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}
                                                            onValueChange={(value) => {
                                                                field.onChange(value);
                                                            }}
                                                            value={field.value}
                                                            disabled={disabled[question.id] as boolean}
                                                        >
                                                            <SelectTrigger className="w-full md:w-[500px]">
                                                                <SelectValue placeholder="กรุณาเลือก" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectGroup>
                                                                    {question?.choices.map(choice => (
                                                                        <SelectItem key={choice.id} value={choice.id}>
                                                                            {choice.text}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                />
                                            )}
                                                {question?.type === 'radio' && (
                                                    <div className="flex flex-row">
                                                        {question?.choices.map(choice => (
                                                            <div key={choice.id} className="ml-4 min-w-[150px]">
                                                                <input onClick={() => handleClick(question.id, choice.id)} type="radio" {...register(question.id, { required: true })} id={choice.id} name={question.id} value={choice.id} />
                                                                <label className="ml-2" htmlFor={choice.id}>
                                                                    {choice.text}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {errors[question?.id!] && <span className="text-red-500 text-sm">กรุณาเลือก</span>}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div>
                                <Link href="/">
                                    <Button variant="ghost" className="bg-[#2A230E] opacity-[50%] text-white">หน้าหลัก</Button>
                                </Link>
                                <Button onClick={topFunction} variant="secondary" className="bg-emerald-500 ml-2" type="submit">
                                    ส่งคำตอบ
                                </Button>
                            </div>
                        </div>
                        </form>
                }
            </>
        </>
    );
}

export default QuestionsForm

const SpinnerImage = styled.img`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 80px;
    height: 80px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
      
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`