"use client";
import { useParams } from 'next/navigation';
import getQuestionsById, { Question } from '../../../utils/allQuestions';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { RegionsData } from '@/constants/regions';

const QuestionsForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm()
    const { id } = useParams()
    const questions = getQuestionsById(id as string)

    const onSubmit = (data: any) => {
        console.log(data, '==dtaa')
        // TODO: Call API python here after submit
    }
    
    const titleName = RegionsData.find(region => region.id === id)?.name

    return (
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
                                                    <input type="radio" {...register(question.id, { required: true })} id={choice.id} name={question.id} value={choice.id} />
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
                    <Button variant="secondary" className="bg-emerald-500 ml-2" type="submit">
                        ส่งคำตอบ
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default QuestionsForm
