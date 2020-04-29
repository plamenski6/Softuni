class Company {

    constructor() {
        this.departments = [];
        this.realDepartments = {};
    }

    addEmployee(username, salary, position, department) {
        if (!username || (!salary && salary !== 0)  || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error(" Invalid input!");
        }

        if (!this.realDepartments[department]) {
            this.realDepartments[department] = [
                { username, salary, position }
            ]
        } else {
            this.realDepartments[department].push({
                username, salary, position
            });
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    getHighSalary(departments) {
        let highestAvgSalaryDep = Object.keys(this.realDepartments).sort((a, b) => {
            let avgAdepartment = this.realDepartments[a].reduce((acc, e) => acc + Number(e.salary), 0)/this.realDepartments[a].length;
            let avgBdepartment = this.realDepartments[b].reduce((acc, e) => acc + Number(e.salary), 0)/this.realDepartments[b].length;
            return avgBdepartment - avgAdepartment;
        })[0];

        let highestAvg = this.realDepartments[highestAvgSalaryDep].reduce((acc, e) => acc + Number(e.salary), 0)/this.realDepartments[highestAvgSalaryDep].length
    
        return {
            highestAvgSalaryDep,
            highestAvg
        }
    }

    bestDepartment() {
        let highestAverage = this.getHighSalary(this.realDepartments);
        let result = "";

        result += `Best Department is: ${highestAverage.highestAvgSalaryDep}\n`;
        result += `Average salary: ${highestAverage.highestAvg.toFixed(2)}\n`;
        result += this.realDepartments[highestAverage.highestAvgSalaryDep].sort((a,b) => {
            return b.salary - a.salary || a.username.localeCompare(b.username);
        }).map(element => {
            return `${element.username} ${element.salary} ${element.position}`;
        }).join('\n');
    
        return result;
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
