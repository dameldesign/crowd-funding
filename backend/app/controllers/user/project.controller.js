let totalProjects = 0;
let allProjects = [];
const category = {
    dapp : 'dapp',
    tool : 'tool',
    template : 'template',
};

const status = {
    active : 'active',
    closed : 'closed',
};

// Function to find a specific player from players list
function findProject (allProjects, id) {
    console.log("allProjects: ", allProjects, "projectID: ", id);
    const foundProject = allProjects.find(project => project.id === id);
    return foundProject;
}

class Project {
    constructor(
        projectName, projectSummary, scope, total_amount,
        methodology, appendices, expectedDeliverables, milestones,
        timeline, team, projectDocumentation, securityMeasures, fairness,
        marketFit, tokenomics, technicalChallenges, solution, community, user_id,
       logoURI
        ) {
        this.category = category;
        this.projectName = projectName;
        this.projectSummary = projectSummary;
        this.minimum_amount = 5;
        this.total_amount = total_amount;
        this.currency = "USD";
        this.methodology = methodology;
        this.appendices = appendices;
        this.expectedDeliverables = expectedDeliverables;
        this.milestones = milestones;
        this.timeline = timeline;
        this.investors = [];
        this.team = team;
        this.projectDocumentation = projectDocumentation;
        this.securityMeasures = securityMeasures;
        this.fairness = fairness;
        this.technicalChallenges = technicalChallenges;
        this.solution = solution;
        this.community = community;
        this.scope = scope;
        this.status = status.active;
        this.logoURI = logoURI;
        this.marketFit = marketFit;
        this.tokenomics = tokenomics;
        this.id = 0;
        this.projectBalance = 0;
        this.user_id = user_id;
     }

    displayInfo() {
        console.log(`
            Monika: ${this.projectName}
            Monika: ${this.projectSummary}
            Monika: ${this.total_amount}
            Monika: ${this.currency}
            Monika: ${this.methodology}
            Monika: ${this.appendices}
            Monika: ${this.expectedDeliverables}
            Monika: ${this.milestones}
            Monika: ${this.timeline}
            Monika: ${this.team}
            Monika: ${this.projectDocumentation}
            Monika: ${this.securityMeasures}
            Monika: ${this.fairness}
            Monika: ${this.technicalChallenges}
            Monika: ${this.solution}
            Monika: ${this.community}
            Monika: ${this.logoURI}
            Monika: ${this.marketFit}
            Monika: ${this.tokenomics}
            Monika: ${this.category}
            Monika: ${this.status}
            logoURI: ${this.logoURI}
            id: ${this.id}
            projectBalance: ${this.projectBalance}
            user_id: ${this.user_id}
        `);
    }

    setId(id){
        this.id = id;
    }

    setBalance(projectBalance){
        this.projectBalance = projectBalance;
    }

    modifyLogo( newLogo ) {
        this.logoURI = newLogo;
    }
}

// Function to create a project
function createProject(
    category,
    projectName,
    projectSummary,
    total_amount,
    methodology,
    appendices,
    expectedDeliverables,
    milestones,
    timeline,
    team,
    projectDocumentation,
    securityMeasures,
    fairness,
    technicalChallenges,
    solution,
    community,
    scope,
    logoURI,
    ) {
    //check if project already exist
    if(findProject(allProjects, id)) {
        throw new Error("Project already exist");
    }

    totalProjects = totalProjects + 1;

    const newProject = new Project(
        category,
        projectName,
        projectSummary,
        total_amount,
        methodology,
        appendices,
        expectedDeliverables,
        milestones,
        timeline,
        team,
        projectDocumentation,
        securityMeasures,
        fairness,
        technicalChallenges,
        solution,
        community,
        scope,
        marketFit,
        tokenomics,
        logoURI
    );

    newProject.setId(totalProjects);

    allProjects.push(newProject);

    console.log("New Project Created:");

    return newProject;
}

// Function to edit a project
function editProject(
    category,
    projectName,
    projectSummary,
    total_amount,
    methodology,
    appendices,
    expectedDeliverables,
    milestones,
    timeline,
    team,
    projectDocumentation,
    securityMeasures,
    fairness,
    technicalChallenges,
    solution,
    community,
    scope,
    fairness,
    logoURI,

    ) {

    let project = findProject(allProjects, id)
    //check if project already exist
    if(!project) {
        throw new Error("Project does not exist");
    }

    const id = project.id;

    const newProject = new Project(
        category,
        projectName,
        projectSummary,
        total_amount,
        methodology,
        appendices,
        expectedDeliverables,
        milestones,
        timeline,
        team,
        projectDocumentation,
        securityMeasures,
        fairness,
        technicalChallenges,
        solution,
        community,
        scope,
        marketFit,
        tokenomics,
        logoURI
    );



    allProjects.push(newProject);

    console.log("New Project Created:");

    return newProject;
}

// View profile
function getProject(id) {
    let project = findProject(allProjects, id);
    return project;
}


module.exports = { allProjects, createProject, Project, totalProjects , findProject, getProject};
