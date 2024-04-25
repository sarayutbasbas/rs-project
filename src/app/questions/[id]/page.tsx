"use client";
import { useParams } from 'next/navigation';
import allQuestions from '../../../utils/allQuestions'
import getQuestionsById, { Question } from '../../../utils/allQuestions';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const a = () => {
    const { id } = useParams()
    const questions = getQuestionsById(id as string)
    return (
        <div className="p-8">
            <div>{id}</div>
            <div className="text-xl">กรุณาตอบคำถามให้ตรงกับความต้องการของคุณ</div>
            <div className="mt-8">
                {questions.length > 0 && questions.map((question: Question | undefined, index: number) => (
                    <div key={question?.id} className="pb-8">
                        <div className="pb-2">{index + 1}. {question?.question}</div>
                        <div className="ml-2">
                            <Select>
                                <SelectTrigger className="w-full md:w-[500px]">
                                    <SelectValue placeholder="กรุณาเลือก" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            question?.choices.map(choice => (
                                                <SelectItem key={choice.id} value={choice.id}>{choice.text}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    
                ))}
            </div>
        </div>
    )
}

export default a