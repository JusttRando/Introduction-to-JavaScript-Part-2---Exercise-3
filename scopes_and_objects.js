console.log(`
  ==============================================================================
  ToDo 1: globalCount
  Create a global variable called globalCount
  ==============================================================================
  `)

// TODO: Create a global variable called globalCount

let globalCount = 4

console.log(`globalCount: ${globalCount}`)

console.log(`
  ==============================================================================
  ToDo 2: local scope
  Create a function that demonstrates local scope
  ==============================================================================
  `)

// TODO: Create a function that demonstrates local scope

function localCount()
{
    return num = 5
}

console.log(`localCount ${localCount()}`)

console.log(`
  ==============================================================================
  ToDo 3: modify variables
  Create a function that tries to modify both variables
  ==============================================================================
  `)

// TODO: Create a function that tries to modify both variables

function stateCount(local,global)
{
    local = 6 
    globalCount = 9
    
    return [local,globalCount];
}

let initialLocalValue = 10; 

const [newLocalValue, newGlobalValue] = stateCount(initialLocalValue, globalCount);

console.log(`The new local value is: ${newLocalValue} and the new globalCount is: ${globalCount} and is NICE!...`)

console.log(`
  ==============================================================================
  ToDo 4: constructor function
  Create a Student constructor function
  ==============================================================================
  `)

// TODO: Create a Student constructor function

function Student(name, id, field) 
{
    this.name = name
    this.id = id
    this.field = field
}

const student_0 = new Student('Loyiso Hans', 'S1000', 'Data Analysis')

console.log(`our student portal includes`, student_0,`for stuff to access`)

console.log(`
  ==============================================================================
  ToDo 5: instances
  Create several student instances
  ==============================================================================
  `)

// TODO: Create several student instances

const student_1 = new Student('Alice Smith', 'S1001', 'Computer Science')
const student_2 = new Student('Bob Johnson', 'S1002', 'Electrical Engineering')
const student_3 = new Student('Charlie Brown', 'S1003', 'Physics')
const student_4 = new Student('Diana Green', 'S1004', 'Biochemistry')
const student_5 = new Student('Ethan Hunt', 'S1005', 'Architecture')
const student_6 = new Student('Fiona Clark', 'S1006', 'Psychology')
const student_7 = new Student('George King', 'S1007', 'Mechanical Engineering')

console.log
(
    "\n",student_1,"\n",
    student_2,"\n",
    student_3,"\n",
    student_4,"\n",
    student_5,"\n",
    student_6,"\n",
    student_7,"\n",
)

console.log(`
  ==============================================================================
  ToDo 6: nested properties
  Create an object literal with nested properties
  ==============================================================================
  `)

// TODO: Create an object literal with nested properties

const universityData = {
    name: "Tech University",
    location: "City Central",
    departments: 
    {
        engineering: 
        {
            head: "Dr. Evelyn Reed",
            programs: ["Software", "Mechanical", "Civil"]
        },
        artsAndSciences: 
        {
            head: "Prof. Alan Turing",
            programs: ["Mathematics", "History", "Literature"]
        }
    },
    currentStudents: [student_1, student_2]
}

console.log(`University Engineering Programs: ${universityData.departments.engineering.programs.join(', ')}`)
console.log(`Student 1's Field (from universityData): ${universityData.currentStudents[0].field}`)