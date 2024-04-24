import QuestionType from "@/constants/questionType";
import Regions from "@/constants/regions";

export interface Question {
    id: string
    question: string
    type: string
    choices: {
        id: string
        text: string
    }[]

}
const allQuestions: Question[] = [
    {
        id: 'Month',
        question: 'คุณต้องการเดินทางไปท่องเที่ยวในเดือนใด',
        type: QuestionType.DROPDOWN,
        choices: [
            {
                id: 'January',
                text: 'มกราคม'
            },
            {
                id: 'February',
                text: 'กุมภาพันธ์'
            },
            {
                id: 'March',
                text: 'มีนาคม'
            },
            {
                id: 'April',
                text: 'เมษายน'
            },
            {
                id: 'May',
                text: 'พฤษภาคม'
            },
            {
                id: 'June',
                text: 'มิถุนายน'
            },
            {
                id: 'July',
                text: 'กรกฎาคม'
            },
            {
                id: 'August',
                text: 'สิงหาคม'
            },
            {
                id: 'September',
                text: 'กันยายน'
            },
            {
                id: 'October',
                text: 'ตุลาคม'
            },
            {
                id: 'November',
                text: 'พฤศจิกายน'
            },
            {
                id: 'December',
                text: 'ธันวาคม'
            }
        ]
    },
    {
        id: 'HowToGo',
        question: 'คุณต้องการเดินทางไปท่องเที่ยวด้วยวิธีใด',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'car',
                text: 'รถส่วนตัว',
              },
              {
                id: 'bus',
                text: 'รถประจำทาง',
              },
              {
                id: 'plane',
                text: 'เครื่องบิน',
              },
              {
                id: 'train',
                text: 'รถไฟ',
              },
              {
                id: 'carRent',
                text: 'รถเช่า'
              }
         ] 
    }
]

const getQuestionsById = (id: string) => {
    let questionsId = []
    if (id === Regions.RegionsKey.NORTH) {
        questionsId = ['Month', 'HowToGo']
    } else if (id === Regions.RegionsKey.CENTRAL) {
        questionsId = ['Month']
    } else if (id === Regions.RegionsKey.EASTERN) {
        questionsId = ['Month', 'HowToGo']
    } else if (id === Regions.RegionsKey.NORTHEAST) {
        questionsId = ['Month']
    } else {
        questionsId = ['Month', 'HowToGo']
    }

    return questionsId.map(id => allQuestions.find(question => question.id === id))
}

export default getQuestionsById
