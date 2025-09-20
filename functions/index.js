const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");

// Simple HTTP function for testing
exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase Functions! DTVitor server is running!");
});

// Function to get project status
exports.getProjectStatus = onRequest((request, response) => {
  const status = {
    server: "online",
    timestamp: new Date().toISOString(),
    project: "dtvitor",
    message: "Servidor Firebase funcionando perfeitamente!",
    endpoints: {
      hello: "/helloWorld",
      status: "/getProjectStatus",
      notebooks: "/getNotebooks"
    }
  };
  
  response.json(status);
});

// Function to provide information about the notebooks
exports.getNotebooks = onRequest((request, response) => {
  const notebooks = {
    dataScience: {
      name: "Data Science Ecosystem",
      description: "Explorando ferramentas e bibliotecas fundamentais para ciência de dados",
      technologies: ["Python", "Jupyter", "Pandas", "NumPy", "Matplotlib"],
      github_url: "https://github.com/vitor2001/dtvitor/blob/main/DataScienceEcosystem%20(2).ipynb"
    },
    finalAssignment: {
      name: "Final Assignment",
      description: "Projeto final demonstrando conhecimentos em análise de dados",
      technologies: ["Python", "Data Analysis", "Visualization"],
      github_url: "https://github.com/vitor2001/dtvitor/blob/main/Final%20Assignment.ipynb"
    }
  };
  
  response.json({
    message: "Notebooks disponíveis",
    count: Object.keys(notebooks).length,
    notebooks: notebooks
  });
});