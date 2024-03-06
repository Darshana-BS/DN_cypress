
// class StaffList{
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     add()
//     {
//         let staff = []
//         staff.push(this.name)
//         console.log(this.name +"with age " + this.age +  " is added to the staff")
//         // console.log(staff)
        
//         if(this.age > 20)
//         {
//             console.log(staff)
//         }else
//         {
//             console.log("Invalid Age")
//         }
//     }
// }
// let emp1 = new StaffList('Darshana1', 24)
// let emp2 = new StaffList('Darshana2', 22)

// emp1.add()
// emp2.add()


class StaffList{
    constructor(staff) {
        this.staff = [];
    }
    add(name,age)
    {
        let details = {name,age}

        //check if the name is duplicate
        if(this.staff.some(staffMember =>  staffMember.name === details.name))
        {
            console.log('Name already exists')
            return
        }

        //if no duplciate add staff
        this.staff.push(details)
        console.log(name +" with age " + age +  " is added to the staff")
        
        if(age > 20)
        {
            console.log(this.staff)
        }else
        {
            console.log("Invalid Age")
        }

        
    }
    //remove member
    remove(name)
        {
            const removeThis = this.staff.findIndex(staffMember => staffMember.name == name)
            if(removeThis !== -1)
            {
                this.staff.splice(removeThis, 1)
                console.log(name, 'with ', removeThis , 'index', 'name is removed')
                console.log(this.staff)
            }else{
                console.log('No details')
            }
        }
    getLength()
    {
        let len = this.staff.length
        console.log(len)
    }
}
let emp1 = new StaffList()
emp1.add('Darshana1', 24)
emp1.add('Darshana12', 29)
emp1.add('Darshana12', 29)
emp1.add('abcd', 29)

emp1.remove('abcd')
emp1.remove('assbcd')
emp1.getLength()
// emp1.add('Darshana2', 20)