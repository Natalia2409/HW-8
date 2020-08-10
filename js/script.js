class Student {
	constructor(university, course, fullName) {
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this.newStudent = true;
		this.marksArr = [5, 4, 3, 2];
	}

	getInfo() {
		return `Студент ${this.university}, ${this.course} курсу, ${this.fullName}`
	}

	get Marks() {
		return this.newStudent ? this.marksArr : undefined;
	}

	set Marks(mark) {
		return this.newStudent ? this.marksArr.push(mark) : undefined;;
	}

	getAverageMark() {
		return this.marksArr.reduce((acc, value) => acc + value) / this.marksArr.length;
	}

	dismiss() {
		return this.newStudent = false;
	}

	recover() {
		return this.newStudent = true;
	}
}


class BudgetStudent extends Student {
	constructor(university, course, fullName) {
		super(university, course, fullName);
		setInterval(() => this.getScholarship(), 30000);

	}

	getScholarship() {
		return (this.getAverageMark > 4 && this.newStudent !== false)
			? console.log('Ви отримали 1400 грн. стипендії!')
			: console.log('Ви не отримали 1400 грн. стипендії!');
	}
}


let student1 = new Student('НУ ЛП', "5-го", "Рудомир Наталія");
let student2 = new BudgetStudent('НУ ЛП', "5-го", "Рудомир Наталія");

console.log(student1);
console.log(student2);
console.log(student1.getInfo());
console.log(student1.marksArr);
student1.Marks = 3;
console.log(student1.marksArr);
console.log(student1.getAverageMark());
student1.dismiss();
console.log(student1.newStudent);
student1.recover();
console.log(student1.newStudent);





