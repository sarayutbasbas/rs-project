import QuestionType from "@/constants/questionType";
import Regions from "@/constants/regions";

export interface Question {
    id: string
    question: string
    type: string
    order: number
    choices: {
        id: string
        text: string
    }[]

}
const allQuestions: Question[] = [
    {
        id: 'Month',
        order: 1,
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
        id: 'How_to_go',
        order: 2,
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
    },
    {
        id: 'Budget_Transportation',
        order: 3,
        question: 'คุณมีงบประมาณในการเดินทางไปท่องเที่ยวเท่าใด (ราคาต่อ 1 ท่าน)',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'lessThan1000',
                text: 'น้อยกว่า 1,000 บาท',
              },
              {
                id: '1001To2000',
                text: '1,001 - 2,000 บาท',
              },
              {
                id: '2001To3000',
                text: '2,001 - 3,000 บาท',
              },
              {
                id: '3001To4000',
                text: '3,001 - 4,000 บาท',
              },
              {
                id: '4001To5000',
                text: '4,001 - 5,000 บาท'
              },
              {
                id: '5001To6000',
                text: '5,001 - 6,000 บาท',
              },
              {
                id: '6001To7000',
                text: '6,001 - 7,000 บาทท'
              },
              {
                id: 'moreThan7000',
                text: 'มากกว่า 7,001 บาท',
              }
        ]
    },
    {
        id: 'Who',
        order: 4,
        question: 'ผู้ที่ร่วมเดินทางกับคุณไปยังสถานที่ท่องเที่ยว',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'alone',
                text: 'คนเดียว',
              },
              {
                id: 'friend',
                text: 'เพื่อน',
              },
              {
                id: 'buddy',
                text: 'แฟน',
              },
              {
                id: 'family',
                text: 'ครอบครัว',
              },
              {
                id: 'couple',
                text: 'สามี/ภรรยา'
              },
              {
                id: 'colleague',
                text: 'เพื่อนร่วมงาน',
              },
              {
                id: '6001To7000',
                text: '6,001 - 7,000 บาทท'
              },
              {
                id: 'moreThan7000',
                text: 'มากกว่า 7,001 บาท',
              }
        ] 
    },
    {
        id: 'Activity',
        order: 5,
        question: 'กิจกรรมที่คุณชอบทำมากที่สุด เมื่อไปยังสถานที่ท่องเที่ยว',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'swim',
                text: 'ดำน้ำ',
              },
              {
                id: 'hiking',
                text: 'เดินป่า',
              },
              {
                id: 'learningLocalCulture',
                text: 'เรียนรู้วัฒนธรรมท้องถิ่น'
              },
              {
                id: 'learningHistory',
                text: 'เรียนรู้ประวัติศาสตร์'
              },
              {
                id: 'entertainment',
                text: 'ไปสถานบันเทิง'
              },
              {
                id: 'shopping',
                text: 'ซื้อสินค้า เช่น ของฝาก หรือของดังประจำท้องถิ่น'
              },
              {
                id: 'nature',
                text: 'ชื่นชมธรรมชาติ'
              },
              {
                id: 'pray',
                text: 'ไหว้พระ/ปฏิบัติธรรม'
              }
        ]
    },
    {
        id: 'StreetFood',
        order: 6,
        question: 'เมื่อไปท่องเที่ยว คุณชอบทานอาหารริมทาง (Street Food) หรือไม่',
        type: QuestionType.RADIO,
        choices: [
              {
                id: 'like',
                text: 'ชอบทาน',
              },
              {
                id: 'unlike',
                text: 'ไม่ชอบทาน',
              }
        ]
    },
    {
        id: 'Budget_Food',
        order: 7,
        question: 'คุณมีงบประมาณสำหรับค่าอาหารในการท่องเที่ยวนี้เท่าใด (ราคาต่อ 1 ท่าน)',
        type: QuestionType.DROPDOWN,
        choices: [
            {
                id: 'lessThan1000',
                text: 'น้อยกว่า 1,000 บาท',
              },
              {
                id: '1001To2000',
                text: '1,001 - 2,000 บาท',
              },
              {
                id: '2001To3000',
                text: '2,001 - 3,000 บาท',
              },
              {
                id: '3001To4000',
                text: '3,001 - 4,000 บาท',
              },
              {
                id: '4001To5000',
                text: '4,001 - 5,000 บาท'
              },
              {
                id: 'moreThan5000',
                text: 'มากกว่า 5,001 บาท',
              },
        ]
    },
    {
        id: 'Package',
        order: 8,
        question: 'คุณต้องการซื้อแพ็คเกจทัวร์หรือไม่',
        type: QuestionType.RADIO,
        choices: [
              {
                id: 'do',
                text: 'ซื้อ',
              },
              {
                id: 'unlike',
                text: 'ไม่ซื้อ',
              }
        ]
    },
    {
        id: 'Overnight',
        order: 9,
        question: 'คุณต้องการค้างพักแรมหรือไม่',
        type: QuestionType.RADIO,
        choices: [
              {
                id: 'need',
                text: 'ต้องการพักแรม',
              },
              {
                id: 'noNeed',
                text: 'ไม่ต้องการพักแรม',
              }
        ]
    },
    {
        id: 'Night',
        order: 10,
        question: 'คุณต้องการพักแรมกี่คืน',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: '1Night',
                text: '1 คืน',
              },
              {
                id: '2Nights',
                text: '2 คืน',
              },
              {
                id: '3Nights',
                text: '3 คืน',
              },
              {
                id: '4Nights',
                text: '4 คืน',
              },
              {
                id: '5Nights',
                text: '5 คืน',
              },
              {
                id: 'moreThan5Nights',
                text: 'มากกว่า 5 คืน',
              },
              {
                id: 'noNeed',
                text: 'ไม่ต้องการพักค้างแรม',
              }
        ]
    },
    {
        id: 'Stay',
        order: 11,
        question: 'ประเภทลักษณะที่พักค้างแรม',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'hotel',
                text: 'โรงแรม/รีสอร์ท',
              },
              {
                id: 'guestHouse',
                text: 'เกสเฮาส์/บังกะโล',
              },
              {
                id: 'tent',
                text: 'เต๊นท์',
              },
              {
                id: 'relativeHouse',
                text: 'บ้านญาติ',
              },
              {
                id: 'apartment',
                text: 'อพาร์ทเมนท์',
              },
              {
                id: 'noNeed',
                text: 'ไม่ต้องการพักค้างแรม',
              }
        ]
    },
    {
        id: 'Budget_Stay',
        order: 12,
        question: 'คุณมีงบประมาณสำหรับค่าที่พักเท่าใด (ราคาต่อ 1 ท่าน)',
        type: QuestionType.DROPDOWN,
        choices: [
            {
                id: 'lessThan1000',
                text: 'น้อยกว่า 1,000 บาท',
              },
              {
                id: '1001To2000',
                text: '1,001 - 2,000 บาท',
              },
              {
                id: '2001To3000',
                text: '2,001 - 3,000 บาท',
              },
              {
                id: '3001To4000',
                text: '3,001 - 4,000 บาท',
              },
              {
                id: '4001To5000',
                text: '4,001 - 5,000 บาท'
              },
              {
                id: '5001To6000',
                text: '5,001 - 6,000 บาท',
              },
              {
                id: '6001To8000',
                text: '6,001 - 8,000 บาท',
              },
              {
                id: '8001To10000',
                text: '8,001 - 10,000 บาท',
              },
              {
                id: '10001To20000',
                text: '10,001 - 20,000 บาท',
              },
              {
                id: 'moreThan20000',
                text: 'มากกว่า 20,000 บาท',
              },
              {
                id: 'noNeed',
                text: 'ไม่ต้องการพักค้างแรม',
              },
              {
                id: 'relativeHouse',
                text: 'ค้างบ้านญาติ',
              }
        ]
    },
    {
        id: 'Gender',
        order: 13,
        question: 'เพศ',
        type: QuestionType.RADIO,
        choices: [
              {
                id: 'male',
                text: 'ชาย',
              },
              {
                id: 'female',
                text: 'หญิง',
              },
              {
                id: 'lgbt',
                text: 'LGBT',
              }
        ]
    },
    {
        id: 'Age_Range',
        order: 14,
        question: 'ช่วงอายุ',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'lessThan20',
                text: 'น้อยกว่าเท่ากับ 20 ปี',
              },
              {
                id: '21To30',
                text: '21 - 30 ปี',
              },
              {
                id: '31To40',
                text: '31 - 40 ปี',
              },
              {
                id: '41To50',
                text: '41 - 50 ปี',
              },
              {
                id: '51To60',
                text: '51 - 60 ปี',
              },
              {
                id: 'moreThan60',
                text: 'มากกว่า 60 ปี',
              }
        ]
    },
    {
        id: 'Religion',
        order: 15,
        question: 'ศาสนา',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'buddha',
                text: 'พุทธ',
              },
              {
                id: 'christian',
                text: 'คริสต์',
              },
              {
                id: 'muslim',
                text: 'อิสลาม',
              },
              {
                id: 'noReligion',
                text: 'ไม่นับถือศาสนา',
              },
        ]
    },
    {
        id: 'Status',
        order: 16,
        question: 'สถานภาพ',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'single',
                text: 'โสด',
              },
              {
                id: 'married',
                text: 'สมรส (มีบุตร)',
              },
              {
                id: 'marriedNoChild',
                text: 'สมรส (ไม่มีบุตร)',
              },
              {
                id: 'divorced',
                text: 'หม้าย',
              },
              {
                id: 'widow',
                text: 'หย่าร้าง (มีบุตร)',
              },
              {
                id: 'widower',
                text: 'หย่าร้าง (ไม่มีบุตร)',
              },
        ]
    },
    {
        id: 'Career',
        order: 17,
        question: 'อาชีพ',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'student',
                text: 'นักเรียน/นักศึกษา',
              },
              {
                id: 'housewife',
                text: 'พ่อบ้าน/แม่บ้าน',
              },
              {
                id: 'freeLancer',
                text: 'รับจ้าง',
              },
              {
                id: 'farmer',
                text: 'เกษตรกร',
              },
              {
                id: 'employee',
                text: 'ข้าราชการ/รัฐวิสาหกิจ',
              },
              {
                id: 'seller',
                text: 'ค้าขาย/ธุรกิจส่วนตัว',
              },
              {
                id: 'privateEmployee',
                text: 'พนักงานบริษัทเอกชน',
              },
              {
                id: 'retired',
                text: 'เกษียน',
              },
              {
                id: 'unemployed',
                text: 'ว่างงาน',
              },
        ]
    },
    {
        id: 'Salary',
        order: 18,
        question: 'รายได้ต่อเดือน',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'lessThan15000',
                text: 'น้อยกว่า 15,000 บาท',
              },
              {
                id: '15001To25000',
                text: '15,001 – 25,000 บาท',
              },
              {
                id: '25001To35000',
                text: '25,001 – 35,000 บาท',
              },
              {
                id: '35001To45000',
                text: '35,001 – 45,000 บาท',
              },
              {
                id: '45001To65000',
                text: '45,001 – 65,000 บาท',
              },
              {
                id: 'moreThan65000',
                text: 'มากกว่า 65,000 บาท',
              },
              {
                id: 'noIncome',
                text: 'ไม่มีรายได้',
              }
        ]
    },
    {
        id: 'Education',
        order: 19,
        question: 'ระดับการศึกษา',
        type: QuestionType.DROPDOWN,
        choices: [
              {
                id: 'elementary',
                text: 'ประถมศึกษา',
              },
              {
                id: 'juniorHigh',
                text: 'มัธยมศึกษาตอนต้น',
              },
              {
                id: 'seniorHigh',
                text: 'มัธยมศึกษาตอนปลาย/ปวช.',
              },
              {
                id: 'vocational',
                text: 'ประกาศนียบัตร/ปวส.',
              },
              {
                id: 'bachelor',
                text: 'ปริญญาตรี',
              },
              {
                id: 'master',
                text: 'ปริญญาโท หรือสูงกว่า',
              },
        ]
    },
    
]

const getQuestionsById = (id: string) => {
    let questionsId = []
    if (id === Regions.RegionsKey.NORTH) {
        questionsId = [
            'Month',
            'Budget_Transportation',
            // 'Activity',
            // 'Budget_Food',
            // 'Stay',
            // 'Budget_Stay',
            // 'Age_Range',
            // 'Status',
            // 'Education'
        ]
    } else if (id === Regions.RegionsKey.CENTRAL) {
        questionsId = [
            'Month',
            'Activity',
            'Budget_Food',
            'Package',
            'Stay',
            'Age_Range',
            'Career',
            'Salary'
        ]
    } else if (id === Regions.RegionsKey.EASTERN) {
        questionsId = [
            'Month',
            'How_to_go',
            'Budget_Transportation',
            'Who',
            'Activity',
            'StreetFood',
            'Budget_Food',
            'Package',
            'Overnight',
            'Night',
            'Stay',
            'Budget_Stay',
            'Gender',
            'Age_Range',
            'Religion',
            'Status',
            'Career',
            'Salary',
            'Education'
        ]
    } else if (id === Regions.RegionsKey.NORTHEAST) {
        questionsId = [
            'Budget_Transportation',
            'Who',
            'Activity',
            'Budget_Food',
            'Stay',
            'Budget_Stay',
            'Status',
            'Education'
        ]
    } else {
        questionsId = [
            'Month',
            'How_to_go',
            'Budget_Transportation',
            'Who',
            'Activity',
            'StreetFood',
            'Budget_Food',
            'Package',
            'Overnight',
            'Night',
            'Stay',
            'Budget_Stay',
            'Gender',
            'Age_Range',
            'Religion',
            'Status',
            'Career',
            'Salary',
            'Education'
        ]
    }

    return questionsId.map(id => allQuestions.find(question => question.id === id))
}

export default getQuestionsById
