class Computer {

    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {

        if (requiredSpace > this.hddMemory) {
            throw new Error("There is not enough space on the hard drive");
        }

        let program = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;

        return program;
    }

    uninstallAProgram(name) {

        let programIndex = this.installedPrograms.findIndex((p) => p.name === name);
        if (programIndex === -1) {
            throw new Error("Control panel is not responding");
        }

        this.installedPrograms.splice(programIndex, 1);
        this.hddMemory += this.installedPrograms[programIndex].requiredSpace;

        return this.installedPrograms;
    }

    openAProgram(name) {

        let programIndex = this.installedPrograms.findIndex((p) => p.name === name);
        if (programIndex === -1) {
            throw new Error(`The ${name} is not recognized`);
        }

        let openIndex = this.taskManager.findIndex((p) => p.name === name);
        if (openIndex > -1) {
            throw new Error(`The ${name} is already open`);
        }

        let ramUsage = (this.installedPrograms[programIndex].requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((this.installedPrograms[programIndex].requiredSpace / this.cpuGHz) / 500) * 1.5;

        if ((this.TotalRamUsage + ramUsage) >= 100) {
            throw new Error(`${name} caused out of memory exception`)
        }

        if ((this.TotalCpuUsage + cpuUsage) >= 100) {
            throw new Error(`${name} caused out of cpu exception`)
        }

        let program = {
            name,
            ramUsage,
            cpuUsage
        }
        this.taskManager.push(program);

        return program;
    }

    get TotalRamUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.ramUsage, 0);
    }

    get TotalCpuUsage() {
        return this.taskManager.reduce((acc, curr) => acc + curr.cpuUsage, 0);
    }

    taskManagerView() {

        if (this.taskManager.length === 0) {
            return "All running smooth so far";
        }

        return this.taskManager.map((e) => `Name - ${e.name} | Usage - CPU: ${e.cpuUsage.toFixed(0)}%, RAM: ${e.ramUsage.toFixed(0)}%`).join('\n');
    }
    
}
